import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  loginBtn: boolean = false;
  passwordPattern =  /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  //表单验证
  createForm() {
    this.userForm = this.fb.group({
      admin: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required,Validators.pattern(this.passwordPattern)]],
      rememeberMe: ['', Validators.required]
    })
  }
  //提交表单
  submitForm() {
    if (this.userForm.valid) {
      console.log(JSON.stringify(this.userForm.value));
    }
  }
  //重置表单
  resetForm() {
    this.userForm.reset();
  }
}
