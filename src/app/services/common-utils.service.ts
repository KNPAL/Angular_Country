import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  showModalSubject$ = new BehaviorSubject(false)
  animationStartedStage$=new BehaviorSubject(false);
  selectedRowSubject$ = new BehaviorSubject({})
  constructor() { }
}
