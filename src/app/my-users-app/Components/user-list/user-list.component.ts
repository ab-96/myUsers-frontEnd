import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../Services/API.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Users } from '../../../Interface/Users';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable) table: MatTable<Users>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: Users[];
  displayedColumns: string[] = ['id', 'name', 'jobTitle', 'Action'];
  dataSource: MatTableDataSource<Users> = new MatTableDataSource<Users>([]);
  userResponse: any;
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.showUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  showUsers(): void {
    this.apiService.getUsers().subscribe((val) => {
      this.users = val;
      this.dataSource.data = val;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(): void {
    this.dialog
      .open(DialogComponent, {})
      .afterClosed()
      .subscribe(() => {
        this.showUsers();
      });
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?') === true) {
      this.userResponse = 'User has been succesfully deleted';
      this.apiService.removeUser(id).subscribe((val) => {
        this.showUsers();
        alert("User has been deleted");
      });
    } else {
      alert('Ok no changes were made');
    }
  }

  updateUser(row: any) {
    this.dialog
      .open(DialogComponent, {
        data: row,
      })
      .afterClosed()
      .subscribe(() => {
        this.showUsers();
      });
  }
}
