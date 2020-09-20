import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      query: new FormControl('', [Validators.required]),
      db: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    })
  }

  sendQuery() {
    this.form.value;
  }

}
