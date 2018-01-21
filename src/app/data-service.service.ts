import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class DataServiceService {
	
	
  constructor(private http:Http) { }
  
getData1516() {
		return this.http.get('assets/epldata_1516.json')
	}

getData1617() {
		return this.http.get('assets/epldata_1617.json')
	}
	
getData() {
		return this.http.get('assets/epldata.json')
	}
	
}
