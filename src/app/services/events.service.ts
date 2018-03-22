import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class EventsService{

	constructor(private http: Http){}

	postEvent(title: string,date: string,venue: string){
		return this.http.post('http://127.0.0.1:8000/api/postEvent',
		{title: title,date: date,venue: venue},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	eventList(){
		return this.http.get('http://127.0.0.1:8000/api/eventList')
		.map(
			(response: Response) => {
				return response.json().events;
			}
		);
	}

	getEvent(id: number){
		return this.http.get('http://127.0.0.1:8000/api/getEvent/'+id)
		.map(
			(response: Response) => {
				return response.json().event;
			}
		);
	}
}