import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Participants } from '../../interfaces.interface';
import { AuthService } from '../services/auth.service';
import { Events } from '../../interfaces.interface';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
	

  participants: Participants[];
  events: Events[];
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

    this.eventsService.eventList()
      .subscribe(
        (events: Events[]) => this.events = events,
        (error: Response) => console.log(error)
      );
  }

  

}
