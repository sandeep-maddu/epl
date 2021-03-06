

import {Component, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {DataService} from '../data.service';



@Component({
  selector: 'app-chart-goalspergame',
  template: `<fusioncharts
    width="50%"
    height="450"
    type="bar2d"
    dataFormat="json"
    [dataSource]=dataSource >
  </fusioncharts>
  `,
  //templateUrl: './chart.component.html',
   styleUrls: ['./chart-goalspergame.component.css']
})


export class ChartGoalspergameComponent implements OnInit {

	 demoId: string;
	 dataSource;
	 highestgoalspergame;
	 mostmatcheswon_graphdata;
	 str1;str2;


	  constructor(private dataService:DataService) {

		  this.highestgoalspergame=this.dataService.temp8;

		  this.dataSource="      {\"chart\": {\"caption\": \"English Premier League\", \"subcaption\": \"2015/16 and 2016/17\", \"yaxisname\": \"Matches won\", \"numberprefix\":\"\", \"yaxismaxvalue\":\"2.5\", \"rotatevalues\": \"0\", \"theme\": \"zune\", \"palettecolors\": \"#4BFEB7\"},\"data\":" + JSON.stringify(this.highestgoalspergame)+"}";       ;

this.demoId = "ex1";



	  }

	   ngOnInit() {




		   //console.log(this.mostmatcheswon);


		    //this.mostmatcheswon_graphdata=this.dataService.mostmatcheswon_graphdata;
		   //console.log(this.mostmatcheswon_graphdata);













//console.log(this.dataSource);

  }






}
