import {Component, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {DataService} from '../data.service';



@Component({
  selector: 'app-chart-matchesdrawn',
  template: `<fusioncharts
    width="50%"
    height="450"
    type="bar2d"
    dataFormat="json"
    [dataSource]=dataSource >
  </fusioncharts>
  `,
  //templateUrl: './chart.component.html',
  styleUrls: ['./chart-matchesdrawn.component.css']
})


export class ChartMatchesdrawnComponent implements OnInit {

	 demoId: string;
	 dataSource;
	 mostmatchesdrawn;
	 mostmatcheswon_graphdata;
	 str1;str2;


	  constructor(private dataService:DataService) {

		  this.mostmatchesdrawn=this.dataService.temp4;

		  this.dataSource="      {\"chart\": {\"caption\": \"English Premier League\", \"subcaption\": \"2015/16 and 2016/17\", \"yaxisname\": \"Matches won\", \"numberprefix\":\"\", \"yaxismaxvalue\":\"30\", \"rotatevalues\": \"0\", \"theme\": \"zune\", \"palettecolors\": \"#0075c2\"},\"data\":" + JSON.stringify(this.mostmatchesdrawn)+"}";       ;

this.demoId = "ex1";



	  }

	   ngOnInit() {




		   //console.log(this.mostmatcheswon);


		    //this.mostmatcheswon_graphdata=this.dataService.mostmatcheswon_graphdata;
		   //console.log(this.mostmatcheswon_graphdata);













//console.log(this.dataSource);

  }






}
