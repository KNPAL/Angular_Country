import { Component, OnInit } from '@angular/core';
import { CommonUtilsService } from '../services/common-utils.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  showAnimationTab: boolean = false;
  constructor(private commonUtilsService: CommonUtilsService) { }

  ngOnInit(): void {
    this.commonUtilsService.animationStartedStage$.subscribe(x => {
      this.showAnimationTab = x;
    })
  }

}
