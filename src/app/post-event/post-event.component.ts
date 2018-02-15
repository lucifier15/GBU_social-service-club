import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { Events } from '../../interfaces.interface';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.css']
})
export class PostEventComponent implements OnInit {

  constructor(private eventService: EventsService) { }

  events: Events[];
  ngOnInit() {
      this.eventService.eventList()
      .subscribe(
        (events: Events[]) => this.events = events,
        (error: Response) => console.log(error)
      );
  }

  onSubmit(form: NgForm){
  	this.eventService.postEvent(form.value.title, form.value.date, form.value.venue)
  	.subscribe(
  		response => console.log(response),
  		error => console.log(error)
  	);
  }

}
