import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Events } from '../../interfaces.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
	
  
  lat: number = 28.4217;
  lng: number = 77.5254;

  events: Events[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
  	this.eventsService.eventList()
  	 .subscribe(
  	 	(events: Events[]) => this.events = events,
  	 	(error: Response) => console.log(error)
  	 );
  }

}
