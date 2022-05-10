import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Users } from 'src/app/Interface/Users';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  // email: FormControl;
  // password: FormControl;
  constructor() {}

  hide = true;
  loginForm: FormGroup;



  ngOnInit(): void {


    
    
    this.loginForm = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    })

    
  }

  // getErrorMessage() {
  //   if (this.loginForm.hasError('required')) {
  //     return 'Email is required';
  //   }

  //   return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  // }


  // getErrorMessage() {
  //   if (this.loginForm.get('email')) {
  //     return 'Email is required';
  //   }

  //   return this.loginForm.hasError('email') ? 'Not a valid email' : '';
  // }


  // getPasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     return 'Password is required';
  //   }

  //   return this.password.hasError('minlenght') && !this.password.hasError('required') ? 'Password must be 6 characters' : '';
  // }

 

}
