import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyUsersLoginModule } from '../my-users-login.module';
import { UserListComponent } from '../../my-users-app/Components/user-list/user-list.component';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  hide = true;
  loginForm: FormGroup;

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/myUsers']);
      alert('Login successful');
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
