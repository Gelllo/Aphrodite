import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { catchError, map, startWith, switchMap, merge} from 'rxjs';
import { UsersService } from 'src/app/services/Users/users.service';
import { UsersDeleteDialogComponent } from './users-delete-dialog/users-delete-dialog.component';
import { UsersUpdateDialogComponent } from './users-update-dialog/users-update-dialog.component';

export interface User{
  id: number;
  userID: string;
  lastName: string;
  firstName: string;
  email: string;
  role: string;
}

export interface GetUsersResponse{
  usersList: User[]
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  displayedColumns: string[] = ['Id', 'UserID', 'LastName', 'FirstName', 'Email', 'Role', 'Actions'];
  dataSource: MatTableDataSource<User>;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<User>

  constructor(private _userService:UsersService, public dialog: MatDialog){}

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this._userService.GetUsers(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          );
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          console.log(data);

          if (data === null) {
            return [];
          }
          this.resultsLength = data.total_count;
          return data.usersList;
        }),
      )
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateUser(user:any){
    this.openUpdateDialog(user);
  }

  deleteUser(user:any){
    this.openDeleteDialog(user);
  }

  openUpdateDialog(user:any): void {

    console.log(user);
    const dialogRef = this.dialog.open(UsersUpdateDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !=  null){
        let index = this.dataSource.data.findIndex(d => d.id === result.id);
        this.dataSource.data[index] = result;
        this.table.renderRows();
        this._userService.UpdateUser(result).subscribe(
          (x:any)=>{
            console.log(x);
          },
          (error:any)=>{
            console.log(error);
          }
        );
      }
    });
  }

  openDeleteDialog(user:any): void {

    const dialogRef = this.dialog.open(UsersDeleteDialogComponent, {
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result!=null)
      {
        let index = this.dataSource.data.findIndex(d => d.userID === result.userID);
        this.dataSource.data.splice(index, 1);
        this.table.renderRows();

        this._userService.DeleteUser(result.id).subscribe(
          (x:any)=>{
            console.log(x);
          },
          (error:any)=>{
            console.log(error);
          }
        );
      }
    });
  }
}
function observableOf(arg0: null): any {
  throw new Error('Function not implemented.');
}

