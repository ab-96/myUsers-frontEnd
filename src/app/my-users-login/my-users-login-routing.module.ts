import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [

  { path: 'login-form', component: LoginFormComponent },
  { path: '**', redirectTo: "login-form"},
  { path: 'main', loadChildren: () => import('../my-users-app/my-users-app.module').then(m => m.MyUsersAppModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyUsersLoginRoutingModule { }
