import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './my-users-app/Components/user-list/user-list.component';
import { LoginFormComponent } from './my-users-login/login-form/login-form.component';

const routes: Routes = [
  {path: "myUsers", component: UserListComponent},
  {path: "login", component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
