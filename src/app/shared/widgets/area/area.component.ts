import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions:any={};
  Highcharts:any= Highcharts;
  value: number=10;
  @Input() data=[];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
   
        chart: {
            type: 'area'
        },
        title: {
            text: 'Random DATA'
        },
        subtitle: {
            text: 'Demo'
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        credits:{
          enabled:false,
        },
        exporing:{
          enabled:true,
        },
        series:this.data 
    },
HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300);
  }

}

// xAxis: {
//   categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
//   tickmarkPlacement: 'on',
//   title: {
//       enabled: false
//   }
// },
// yAxis: {
//   title: {
//       text: 'Billions'
//   },
//   labels: {
//       formatter : ()=>{
//           return this.value / 1000;
//       }
//   }
// },

// plotOptions: {
//   area: {
//       stacking: 'normal',
//       lineColor: '#666666',
//       lineWidth: 1,
//       marker: {
//           lineWidth: 1,
//           lineColor: '#666666'
//       }
//   }
// },