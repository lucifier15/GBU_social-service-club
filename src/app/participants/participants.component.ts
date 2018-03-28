import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Participants } from '../../interfaces.interface';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
	

  participants: Participants[];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  	this.eventsService.getPartList()
	  	.subscribe(
	  		(participants: Participants[]) => this.participants = participants,
	  		(error: Response) => console.log(error)
	  	);
  }

  

}
