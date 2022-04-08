import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout';


import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { DialogComponent } from './Components/dialog/dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
