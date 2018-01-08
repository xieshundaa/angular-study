import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BtnStatusService {
  public btnStatus: Subject<string> = new Subject<string>();
  constructor() { }

}
