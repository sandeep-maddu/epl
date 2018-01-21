import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  gotoMatches() {
	  let link = ['/matches'];
        this.router.navigate(link);
  }
  
}
