import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { NgxloginComponent } from './ngxlogin/ngxlogin.component';
import { NgxRegisterComponent } from './ngx-register/ngx-register.component';
import { NgxLogoutComponent } from './ngx-logout/ngx-logout.component';
import { NgxRequestPasswordComponent } from './ngx-request-password/ngx-request-password.component';
import { NgxResetPasswordComponent } from './ngx-reset-password/ngx-reset-password.component';

@NgModule({
  declarations: [NgxloginComponent, NgxRegisterComponent, NgxLogoutComponent, NgxRequestPasswordComponent, NgxResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
  ]
})
export class AuthModule { }
