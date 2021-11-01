import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any = [];
  cards: any = [];
  piechart: any;
  
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.Cards();
    this.piechart = this.dashboardService.pieChart();
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }


}
