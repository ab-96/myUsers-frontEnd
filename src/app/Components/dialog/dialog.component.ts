import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../Services/API.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [],
      jobTitle: [],
    });
  }

  // onSubmit() {
  //   alert('User has been addded');
  //   this.apiService.addUser(this.userForm.value).subscribe({
  //     next: (res) => {
  //       this.userForm.reset();
  //       // this.data.sayhello();
  //     },
  //   });
  // }

  
  onSubmit() {
    this.apiService.addUser(this.userForm.value)
    .subscribe( {
      next: val => {
        alert(val.name + "Has been added")
        console.log(val.name);
      }
    })
    
  }







}
