import { NgModule } from '@angular/core';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'login-form', component: ToolbarComponent },
  { path: 'user-list', component: UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyUsersRoutingModule { }
