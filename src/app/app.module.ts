import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRouterModule } from "./app.routes";
import {DataServiceService} from './data-service.service';
import {DataService} from './data.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {FilterPipe} from './filter.pipe';
import {RoundsPipe} from './rounds.pipe';
import {YearPipe} from './year.pipe';
import {TeamPipe} from './team.pipe';
//import {NgxChartsModule} from '@swimlane/ngx-charts';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';






import { AppComponent } from './app.component';
import { OverallComponent } from './overall/overall.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamResultComponent } from './team-result/team-result.component';
/* import { D3BarChartComponent } from './chart/chart.component';
import { D3AxisDirective } from './d3-axis.directive';
import { AutoResizeDirective } from './auto-resize.directive';
import { TweenPipe } from './tween.pipe'; */




import { SummaryComponent } from './summary/summary.component';
import { ChartMatcheswonComponent } from './chart-matcheswon/chart-matcheswon.component';
import { ChartMatcheslostComponent } from './chart-matcheslost/chart-matcheslost.component';
import { ChartMatchesdrawnComponent } from './chart-matchesdrawn/chart-matchesdrawn.component';
import { ChartWinpercentComponent } from './chart-winpercent/chart-winpercent.component';
import { ChartGoalsscoredComponent } from './chart-goalsscored/chart-goalsscored.component';
import { ChartGoalsconcededComponent } from './chart-goalsconceded/chart-goalsconceded.component';
import { ChartGoaldiffComponent } from './chart-goaldiff/chart-goaldiff.component';
import { ChartGoalspergameComponent } from './chart-goalspergame/chart-goalspergame.component';
import { ChartWinstreakComponent } from './chart-winstreak/chart-winstreak.component';
import { ChartLossstreakComponent } from './chart-lossstreak/chart-lossstreak.component';



@NgModule({
  declarations: [
    AppComponent,
    OverallComponent,
	FilterPipe,
	RoundsPipe,
	YearPipe,
	TeamPipe,
	MatchDetailComponent,
	TeamDetailComponent,
	TeamResultComponent,

	SummaryComponent,
	ChartMatcheswonComponent,
	ChartMatcheslostComponent,
	ChartMatchesdrawnComponent,
	ChartWinpercentComponent,
	ChartGoalsscoredComponent,
	ChartGoalsconcededComponent,
	ChartGoaldiffComponent,
	ChartGoalspergameComponent,
	ChartWinstreakComponent,
	ChartLossstreakComponent



  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,appRouterModule,FusionChartsModule.forRoot(FusionCharts, Charts, Widgets)
  ],
  providers: [DataServiceService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
