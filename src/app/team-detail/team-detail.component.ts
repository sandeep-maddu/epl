import { Component, OnInit, OnDestroy  } from '@angular/core';
import {DataServiceService} from '../data-service.service';
import {DataService} from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {


	selectedTeam;teamdata;teams;sub;
	mostmatcheswon;
	images;selectedTeamImage;
	temp1516;
	teamsearch;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router:Router) {


	  }

  ngOnInit() {

  var temp1;

  this.teams=this.dataService.teams;
  this.images=this.dataService.teamimages;

   this.sub=this.route.params.subscribe(params => {
          let teaminurl = (params['team']);
		  this.onSelect(teaminurl)
          //this.teamdata=this.dataService.getTeamData(teaminurl);
		  //this.selectedTeam=teaminurl;
        });


  //console.log( this.selectedTeamImage);




  //this.dataService.getData1516().subscribe(data=>temp1=data.json());
  //this.dataService.getData1516().map(response=>response.json());
  //console.log(temp1);
  }

  ngOnDestroy(){
        this.sub.unsubscribe();
    }

onSelect(team) {
	 this.selectedTeam=team;
	 this.teamdata=this.dataService.getTeamData(this.selectedTeam);
	//this.dataService.getTeamData(this.selectedTeam).subscribe(teamsdata=>this.teamdata=teamsdata);
     this.selectedTeamImage=this.getImage(team);




  }

  getImage(team) {



	  for(let obj of this.images) {
		  if(obj.team===team) {
			  return obj.img;
		  }
	  }

  }

  gotoMatches() {
	  let link = ['/matches'];
        this.router.navigate(link);
  }

  gotoAnalysis() {
	  let link = ['/summary'];
        this.router.navigate(link);
  }


}
