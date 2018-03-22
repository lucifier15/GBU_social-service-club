import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Members } from '../../interfaces.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
	
	members: Members[];
  constructor(private membersService: MembersService) { }

  ngOnInit() {

  	this.membersService.getMember()
  		.subscribe(
  		(members: Members[]) => this.members = members,
  		(error: Response ) => console.log(error)
  	);
  }

}
