import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyUsersLoginRoutingModule } from './my-users-login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { MaterialModule } from '../shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    MyUsersLoginRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ]
})
export class MyUsersLoginModule { }
