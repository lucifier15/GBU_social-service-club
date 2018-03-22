import { Component, OnInit ,OnDestroy} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { EventsService } from '../services/events.service';
import { Events } from '../../interfaces.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	
	event: Events[];
  id: number;
  private sub: any;
  constructor(private eventsService: EventsService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
       });

  	this.eventsService.getEvent(this.id)
  	.subscribe(
  		(event: Events[]) => this.event = event,
  		(error: Response) => console.log(error)
  	);
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
