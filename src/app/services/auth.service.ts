import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AuthService{
	
	constructor(private http: Http){}
	
	adminSignIn(email: string,password: string){
		return this.http.post('http://18.217.70.42/ssclub-laravel-backend/public/api/admin/signin',
		{email:email, password: password},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
		.map(
			(response: Response) =>	{
				const token = response.json().token;
				const base64Url = token.split('.')[1];
          		const base64 = base64Url.replace('-', '+').replace('_', '/');
				return {token: token, decoded: JSON.parse(window.atob(base64))};
			}
		)
		.do(
			tokenData => {
				localStorage.setItem('token', tokenData.token);
			}
		);
	}

	getToken(){
		return localStorage.getItem('token');
	}

	getIp(){
		return this.http.get('http://freegeoip.net/json/?callback')
            .map(response => response || {});
	}
}