import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../services/common-utils.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  showModal = false;
  Country:any;
  constructor(private commonUtilsService:CommonUtilsService) { }

  ngOnInit(): void {
    this.commonUtilsService.showModalSubject$.subscribe(x=>[
      this.showModal = x
    ])

    this.commonUtilsService.selectedRowSubject$.subscribe(obj=>{
      this.Country = obj;
    })
  }

  closeModal() {
    this.commonUtilsService.showModalSubject$.next(false)
  }
}
