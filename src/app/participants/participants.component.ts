import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Participants } from '../../interfaces.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
	

  participants: Participants[];
  t: string;
  
  constructor(private eventsService: EventsService,private authService: AuthService) { }

  ngOnInit() {
    const token = this.authService.getToken();
    this.t = token;

  	this.eventsService.getPartList()
	  	.subscribe(
	  		(participants: Participants[]) => this.participants = participants,
	  		(error: Response) => console.log(error)
	  	);
  }

  

}
