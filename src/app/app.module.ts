import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MyUsersLoginModule } from './my-users-login/my-users-login.module';
import { MyUsersAppModule } from './my-users-app/my-users-app.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './my-users-app/Components/toolbar/toolbar.component';
import { UserListComponent } from './my-users-app/Components/user-list/user-list.component';
import { DialogComponent } from './my-users-app/Components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserListComponent,
    DialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
    RouterModule,
    MyUsersLoginModule,
    MyUsersAppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
