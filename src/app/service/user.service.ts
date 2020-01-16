
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';


import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { LocalStorageService } from './index';
import { environment } from '../../environments/environment';
import { User } from '../model/index';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  itemsCollection: AngularFirestoreCollection<User>;
  itemDoc: AngularFirestoreDocument<User>;
  user: User;
  items: Observable < User[] > ;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private fns: AngularFireFunctions, private localStorageService: LocalStorageService, private router: Router) {
    this.itemsCollection = afs.collection<User>(environment.collectionFirebase.user);
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
            const unique = user.uid;
            this.afs.doc<User>(`${environment.collectionFirebase.user}/${unique}`).valueChanges().subscribe((userI: User) => {
              try {
                this.localStorageService.setItem(environment.config.auth_key, userI);
                this.user = userI;
              } catch (e) {
                  console.log(e);
                  this.user = null;
                  this.localStorageService.setItem(environment.config.auth_key, null);
              }
          });
      } else {
            this.user = null;
            this.localStorageService.setItem(environment.config.auth_key, null);
        }
    });
  }
  getAllUsers(): Observable<User[]> {
    this.items = this.afs.collection(environment.collectionFirebase.user, ref => {
      return ref
      .limit(100);
    })
    .snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return {
            id,
            ...data
          };
        }))
      );
    return this.items;
  }
  getItem() {
    return this.localStorageService.getItem(environment.config.auth_key) as User;
  }
  updateItem(item: User) {
    this.itemDoc = this.afs.doc(`${environment.collectionFirebase.user}/${item.id}`);
    return this.itemDoc.set(item, { merge: true });
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    provider.addScope('email');
    return this.afAuth.auth.signInWithRedirect(provider);
  }
  getRedirectLogin() {
    return this.afAuth.auth.getRedirectResult();
  }
  logOut() {
    this.afAuth.auth.signOut();
    this.user = null;
    this.localStorageService.setItem(environment.config.auth_key, null);
    this.router.navigate(['/login']);
    location.reload();
  }
}
