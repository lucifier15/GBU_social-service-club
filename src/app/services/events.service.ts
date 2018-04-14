import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EventsService{

	constructor(private http: Http,private authService: AuthService){}

	postEvent(title: string,date: string,venue: string,rule1: string,rule2: string,rule3: string,rule4: string,rule5: string,rule6: string,rule7: string,rule8: string,rule9: string,rule10: string){
		const token = this.authService.getToken();
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/postEvent?token='+ token,
		{title: title,date: date,venue: venue,rule1: rule1,rule2: rule2,rule3: rule3,rule4: rule4,rule5: rule5,rule6: rule6,rule7: rule7,rule8: rule8,rule9: rule9,rule10: rule10},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	deleteEvent(id: number){
		const token = this.authService.getToken();
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/deleteEvent?token='+ token,
		{id: id},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	eventList(){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/eventList')
		.map(
			(response: Response) => {
				return response.json().events;
			}
		);
	}

	getEvent(id: number){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/getEvent/'+id)
		.map(
			(response: Response) => {
				return response.json().event;
			}
		);
	}

	register(name: string,roll_no: string,phone: string,email: string,otp: string,eventId: number){
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/register',
		{name: name,roll_no: roll_no,phone: phone,email: email,otp: otp,eventId: eventId},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	getPartList(){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/getPartList')
		.map(
			(response: Response) =>	{
				return response.json().participants;
			}
		);
	}

	sendOtp(email: string){
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/sendOtp',
		{email: email},
		{headers: new Headers({'X-Requested-With':'XMLHttpRequest'})})
		.map(
			(response: Response) => {
				return response.json().otp;
			}
		);
	}
}