import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart/chart.component';
import { TubeLegendComponent } from './tube-legend/tube-legend.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatExpansionModule} from '@angular/material/expansion';
import { TubePanelComponent } from './tube-panel/tube-panel.component';
import { HttpClientModule  } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChartComponent,
    TubeLegendComponent,
    TubePanelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatExpansionModule,
    HttpClientModule,
    MatSidenavModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
