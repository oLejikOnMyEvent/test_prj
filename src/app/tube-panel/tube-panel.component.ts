import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tube-panel',
  templateUrl: './tube-panel.component.html',
  styleUrls: ['./tube-panel.component.scss']
})
export class TubePanelComponent implements OnInit {

  constructor() { }

@Input() panelData

  panelOpenState = false;

  ngOnInit(): void {
    console.log(this.panelData);
  }


  checkStyle(item){
    if(item === 'C'){
      return 'tube_panel__color'
    } else {
      return 'tube_panel__color2'
    }
  }

  checkStyleHeaderPanel(item){
    if(item === 'C'){
      return 'tube_panel_header__color'
    } else {
      return 'tube_panel_header__color2'
    }
  }

}
