import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QueryService } from '../query-form/query.service';
import { AcceptDialogComponent } from './accept-dialog/accept-dialog.component';
import { RejectDialogComponent } from './reject-dialog/reject-dialog.component';

@Component({
  selector: 'app-pending-queries',
  templateUrl: './pending-queries.component.html',
  styleUrls: ['./pending-queries.component.css']
})
export class PendingQueriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'user', 'query', 'status', 'actions', 'comments'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    public queryService: QueryService) { }

  ngOnInit(): void {
    this.queryService.getPendingQueries().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  openAcceptDialog() {
    let dialogRef = this.dialog.open(AcceptDialogComponent, {
      width: '600px',
    });
  }

  openRejectDialog() {
    let dialogRef = this.dialog.open(RejectDialogComponent, {
      width: '600px',
    });
  }
}
