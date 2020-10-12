import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css']
})
export class RejectDialogComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("data", data);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      reason: new FormControl('', [Validators.required]),
    })
  }

  rejectQuery() {
    rejectMssg  
  }
}
