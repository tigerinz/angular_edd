import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-database',
  templateUrl: './set-database.component.html',
  styleUrls: ['./set-database.component.less']
})
export class SetDatabaseComponent implements OnInit {

  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      source: [null, [Validators.required]],
      saPassWord: [null, [Validators.required]]
    });
  }

  saveDbInfo(): void {
    for(const i in this.validateForm.controls){
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/desktop');
  }
}
