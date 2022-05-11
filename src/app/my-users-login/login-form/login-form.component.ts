import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  @Output() messageEvent = new EventEmitter<string>();

  hide = true;
  loginForm: FormGroup;

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/myUsers']);
      alert('Login successful');
      console.log(this.hide);
      
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
