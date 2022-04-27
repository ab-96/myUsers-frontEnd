import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../Services/API.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/Interface/Users';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  userForm: FormGroup;
  actionBtn: String = 'Save';
  actionName: String = "Add User"

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public updateUser: Users,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [],
      jobTitle: [],
    });

    if (this.updateUser) {
      this.actionBtn = 'Update';
      this.actionName = "Update User"
      this.userForm.controls['name'].setValue(this.updateUser.name);
      this.userForm.controls['jobTitle'].setValue(this.updateUser.jobTitle);
    }
  }

  onSubmit(): void {
    if (this.updateUser) {
       this.apiService.updateUser(this.userForm.value, this.updateUser.id)
      .subscribe({
        next: (res) => {
          alert("User " + res.id + " has been updated successfully")
          this.userForm.reset()
          this.dialogRef.close("update")
        }
      })
    } else {
      this.apiService.addUser(this.userForm.value).subscribe({
        next: (val) => {
          alert(val.name + ' Has been added');
          this.dialogRef.close();
          this.userForm.reset()
        },
      });
      
    }

   

      


     


    }
  
  }


