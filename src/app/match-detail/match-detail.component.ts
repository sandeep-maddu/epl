import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
	
	  @Input() match;
	  @Input() winner:string;
	  @Input() tournament;
	  @Input() round;

  constructor() { }

  ngOnInit() {
  }

}
