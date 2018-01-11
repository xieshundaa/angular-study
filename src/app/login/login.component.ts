import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  // validateForm = new FormGroup ({
  //   admin: new FormControl()
  // });
  constructor(public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  // goworkSpace() {

  // }
  _submitForm() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
    if (this.validateForm.valid) {
      console.log(this.validateForm.value);
      localStorage.setItem('userId', '123123');
    // this.router.navigateByUrl('/workspace');
      this.router.navigateByUrl('workspace');
    }
  }
  createForm() {
    this.validateForm = this.fb.group({
      admin: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }
}
