import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-cost-id',
  templateUrl: './set-cost-id.component.html',
  styleUrls: ['./set-cost-id.component.less']
})
export class SetCostIdComponent implements OnInit {

  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      costId: [null, [Validators.required]]
    });
  }

  saveCostId(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls){
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/desktop');
  }
}
