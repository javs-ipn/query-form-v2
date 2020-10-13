import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QueryService } from '../../query-form/query.service';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.css']
})
export class AcceptDialogComponent implements OnInit {
  query: any;
  loginError: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public queryService: QueryService, private dialogRef: MatDialogRef<AcceptDialogComponent>) { 
    this.query = data;
  }

  ngOnInit(): void {
  }

  approveQuery() {
    this.queryService.approveQuery(this.query).subscribe((data) => {
      if (!data) {
        this.loginError = true;
      } else { 
        this.loginError = false;
        this.dialogRef.close();
      }
    });
  }
}