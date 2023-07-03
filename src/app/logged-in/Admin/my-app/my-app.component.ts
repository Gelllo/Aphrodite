import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, filter, map, merge, startWith, switchMap } from 'rxjs';
import { MyAppExceptionsService } from 'src/app/services/MyApplicationExceptions/my-app-exceptions.service';

export interface AppException{
  id: number;
  application: string;
  dateThrown: Date;
  error: string;
}

export interface GetExceptionsResponse{
  applicationExceptions: AppException[],
  total_count:number
}

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'application', 'dateThrown', 'error'];
  dataSource: MatTableDataSource<AppException>;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  expandedElement: AppException | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _myAppExceptionsService: MyAppExceptionsService) {
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this._myAppExceptionsService.GetExceptions(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }
          this.resultsLength = data.total_count;
          return data.applicationExceptions;
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
}


function observableOf(arg0: null): any {
  throw new Error('Function not implemented.');
}

