import { Component, OnInit } from '@angular/core';
import { HttpCommonService } from '../services/http-common.service';
import { map, of, take, takeWhile } from 'rxjs';
import { CommonUtilsService } from '../services/common-utils.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  countryList: any = [];
  constructor(private httpCommon: HttpCommonService, private commonUtilsService:CommonUtilsService) { }

  ngOnInit(): void {
    this.getDataSet()
  }

  getDataSet() {
    this.httpCommon.get('https://restcountries.com/v3.1/all')
    .subscribe(x => {
      x.sort((a:any, b:any) => {
        return b.value - a.value;
      });
      
      this.countryList = x.slice(0, 10);
      console.log(x)
    })
  }

  getCurrency(Pobj: any) {
    console.log(Pobj)
    const names$ = of(Pobj).pipe(
      map((objects) => objects.map((obj: any) => obj.name))
    );
   
    console.log(names$)
    return names$
  }


  animation(country:any){
    this.commonUtilsService.selectedRowSubject$.next(country)
    this.commonUtilsService.animationStartedStage$.next(true)
  }

  openPopup(country:any){
    this.commonUtilsService.selectedRowSubject$.next(country)
    this.commonUtilsService.showModalSubject$.next(true)
  }

}
