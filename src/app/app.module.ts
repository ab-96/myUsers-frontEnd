import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './my-users-app/Components/toolbar/toolbar.component';
import { UserListComponent } from './my-users-app/Components/user-list/user-list.component';
import { DialogComponent } from './my-users-app/Components/dialog/dialog.component';

const routes: Routes = [
  {
    path: 'myUsers',
    loadChildren: () => import('./my-users-app/my-users-app.module').then(m => m.MyUsersAppModule)
  },
  {
    path: 'login', loadChildren: () => import('./my-users-login/my-users-login.module').then(m => m.MyUsersLoginModule)
  },
  {
    path: '**', redirectTo: "login"
  }


];



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserListComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
