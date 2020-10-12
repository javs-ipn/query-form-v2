import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-accept-dialog',
  templateUrl: './accept-dialog.component.html',
  styleUrls: ['./accept-dialog.component.css']
})
export class AcceptDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log("data", data);
  }

  ngOnInit(): void {
  }

}
