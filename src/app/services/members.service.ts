import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AuthService } from '../services/auth.service';

@Injectable()
export class MembersService{

	constructor(private http: Http,private authService: AuthService){}

	addMember(name: string,roll_no: string,post: string){
		const token = this.authService.getToken();
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/addMember?token='+ token,
		{name: name,roll_no: roll_no,post: post},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	getMember(){
		return this.http.get('http://18.217.70.42/ssclub-laravel-backend/public/api/getMembers')
			.map(
				(response: Response) => {
					return response.json().members;
				}
			);
	}
}
