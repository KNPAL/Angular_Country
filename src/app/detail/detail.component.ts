import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../services/common-utils.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInAnimation', [
      state('void', style({ position: 'fixed', width: '100%' })),
      state('*', style({ position: 'fixed', width: '100%' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
      ]),
    ])
  ]
})
export class DetailComponent implements OnInit {

  Country: any = [];
 // stage = 'enter'
  constructor(private commonUtilsService: CommonUtilsService) { }

  ngOnInit(): void {
    this.commonUtilsService.selectedRowSubject$.subscribe(obj => {
      this.Country = obj;
    })

    this.commonUtilsService.animationStartedStage$.subscribe(obj => {
      // this.stage='enter'
      // alert(this.stage)
      // setTimeout(() => {
      
      //   this.stage = this.stage === 'enter' ? 'leave' : 'enter';
      //   alert(this.stage)
      // }, 1000);
    })
  }

}
