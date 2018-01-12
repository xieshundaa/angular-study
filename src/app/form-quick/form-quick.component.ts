import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../register-model';

@Component({
  selector: 'form-quick',
  templateUrl: './form-quick.component.html',
  styleUrls: ['./form-quick.component.scss']
})
export class FormQuickComponent implements OnInit {
  public regModel: RegisterModel = new RegisterModel();
  constructor() { }

  ngOnInit() {
    // this.asd = this.regModel;
    // console.log(typeof this.regModel);
    // console.log(this.regModel.rememeberMe);
    // console.log(JSON.stringify(this.regModel));

  }
  _submitform() {
      console.log(this.regModel);
  }
}
