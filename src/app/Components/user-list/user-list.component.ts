import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from "../../Services/API.service"
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

  
  users: any;
  displayedColumns: string[] = ['id', 'name', 'jobTitle'];


  showList: boolean = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit() {
    this.apiService.getUsers()
    .subscribe(data => this.users = data)
  
  } 

  onClick() {
   this.showList = !this.showList
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();
  }


  openDialog() {
    this.dialog.open(DialogComponent, {
      // width: '30%'
    });
  }


}



