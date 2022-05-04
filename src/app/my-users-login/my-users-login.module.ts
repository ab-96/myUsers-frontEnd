import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyUsersLoginRoutingModule } from './my-users-login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MyUsersLoginRoutingModule
  ]
})
export class MyUsersLoginModule { }
