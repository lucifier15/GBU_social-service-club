import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class MembersService{

	constructor(private http: Http){}

	addMember(name: string,roll_no: string,post: string){
		return this.http.post('http://127.0.0.1:8000/api/addMember',
		{name: name,roll_no: roll_no,post: post},
		{headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
	}

	getMember(){
		return this.http.get('http://127.0.0.1:8000/api/getMembers')
			.map(
				(response: Response) => {
					return response.json().members;
				}
			);
	}
}
