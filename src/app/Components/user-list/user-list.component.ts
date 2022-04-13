import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../Services/API.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Users } from '../../Interface/Users';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  [x: string]: any;
  @ViewChild(MatTable) table: MatTable<Users>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: any;
  displayedColumns: string[] = ['id', 'name', 'jobTitle', 'Action'];
  dataSource: MatTableDataSource<any>;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.showUsers();
  }

  // showUsers() {
  //   this.apiService.getUsers().subscribe({
  //     next: (userArr) => {
  //       this.users = userArr;
  //       this.dataSource = new MatTableDataSource(userArr);
  //       this.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //   });
  // }

  showUsers() {
    this.apiService.getUsers().subscribe((val) => {
      this.users = val;
      this.dataSource = new MatTableDataSource(val);
      this.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }) 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog
      .open(DialogComponent, {})
      .afterClosed()
      .subscribe((val) => {
        this.showUsers();
      });
  }

  deleteUser(id: number) { 
    this.apiService.removeUser(id)
    .subscribe({
      next: res => {
        this.showUsers();
        alert("User has been removed")
      },
    });
  }

 
}
