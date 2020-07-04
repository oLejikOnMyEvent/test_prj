import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PanelSerivceService} from '../services/panel-serivce.service'


@Component({
  selector: 'app-tube-legend',
  templateUrl: './tube-legend.component.html',
  styleUrls: ['./tube-legend.component.scss']
})
export class TubeLegendComponent implements OnInit {

  constructor(private PanelSerivceService: PanelSerivceService) { }

  tubeDdata = []
  reportData : string
  showFiller = false;
  showChart: boolean = false
  
  // @Output() oNChartOpen = new EventEmitter<boolean>()

  ngOnInit(): void {

    this.PanelSerivceService.getPanelData()
    .subscribe(
      (res) => {
        this.tubeDdata = res
        console.log(this.tubeDdata)
      },
      (err)=>{
        console.log(err)
      }
    )

    this.PanelSerivceService.getDataReport()
    .subscribe(
      (res)=>{
        this.reportData = res
        console.log(this.reportData);
        
      },
      (err)=>{
        console.log(err)
      }
    )
  }

  checkStyle(item){
    if(item === 'C'){
      return 'horizontal_line__span'
    } else {
      return 'horizontal_line__span2'
    }
    
  }


  openChart(showChart){
    this.showChart = showChart
  }

  closeChart(){
    this.showChart;
  }
}
