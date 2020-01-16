import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxloginComponent } from './ngxlogin/ngxlogin.component';
import { NgxResetPasswordComponent } from './ngx-reset-password/ngx-reset-password.component';
import { NgxRequestPasswordComponent } from './ngx-request-password/ngx-request-password.component';
import { NgxLogoutComponent } from './ngx-logout/ngx-logout.component';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';


const routes: Routes = [
  {
    path: '',
    component: NgxloginComponent,
  },
  {
    path: 'login',
    component: NgxloginComponent,
  },
  {
    path: 'register',
    component: NgxRegisterComponent,
  },
  {
    path: 'logout',
    component: NgxLogoutComponent,
  },
  {
    path: 'request-password',
    component: NgxRequestPasswordComponent,
  },
  {
    path: 'reset-password',
    component: NgxResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
