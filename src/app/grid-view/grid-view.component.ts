import { Component, OnInit } from '@angular/core';
import { HttpCommonService } from '../services/http-common.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  countryList: Observable<any[]>;
  constructor(private httpCommon: HttpCommonService) {
    this.countryList = this.httpCommon.get('https://restcountries.com/v3.1/all')
  }

  ngOnInit(): void {
  }


}
