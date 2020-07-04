import { Component, Input, OnInit} from '@angular/core';
import { multi } from './data';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit    {

  @Input() showChart:boolean;

  panelOpenState = false;
  // showChart = true

  ngOnInit(){

    console.log(this.showChart)
  }

  multi: any[];
  view: any[] = [318, 250];
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = ' ';
  yAxisLabel: string = '';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { 
    Object.assign(this, { multi });
  }

  oNChartOpen(showChart){
    console.log(showChart)
   this.showChart = showChart
  }

}
