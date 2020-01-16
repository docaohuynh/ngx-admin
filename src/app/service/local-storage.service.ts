import { Injectable } from '@angular/core';

const APP_PREFIX = 'tnv-';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  static loadInitialState() {
    if (typeof(Storage) !== 'undefined') {
      return Object.keys(localStorage).reduce((state: any, storageKey) => {
        if (storageKey.includes(APP_PREFIX)) {
          state = state || {};
          const stateKey = storageKey
            .replace(APP_PREFIX, '')
            .toLowerCase()
            .split('.');
          let currentStateRef = state;
          stateKey.forEach((key, index) => {
            if (index === stateKey.length - 1) {
              currentStateRef[key] = JSON.parse(localStorage.getItem(storageKey));
              return;
            }
            currentStateRef[key] = currentStateRef[key] || {};
            currentStateRef = currentStateRef[key];
          });
        }
        return state;
      }, null);
   }
  }

  setItem(key: string, value: any) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    }
  }
  removeItem(key: string) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.removeItem(`${APP_PREFIX}${key}`);
    }
  }
  getItem(key: string) {
    if (typeof(Storage) !== 'undefined') {
      const user = localStorage.getItem(`${APP_PREFIX}${key}`);
      if (user && user !== 'undefined') {
        return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
      }
      return null;
    }
  }
}
