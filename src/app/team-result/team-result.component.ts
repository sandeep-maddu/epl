import { Component, OnInit, Input } from '@angular/core';
import {TeamData} from '../teamdataclass';
import {DataService} from '../data.service';

@Component({
  selector: 'app-team-result',
  templateUrl: './team-result.component.html',
  styleUrls: ['./team-result.component.css']
})
export class TeamResultComponent implements OnInit {



	 @Input() data:TeamData;



  constructor(private dataService:DataService) { }

  ngOnInit() {

	  //this.mostmatcheswon=this.dataService.mostmatcheswon;
  //console.log(this.mostmatcheswon);

  }


}
