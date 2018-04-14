import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { Events } from '../../interfaces.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.css']
})
export class PostEventComponent implements OnInit {

  constructor(private eventService: EventsService,private authService: AuthService) { }

  events: Events[];
  t: string;
  ngOnInit() {
      const token = this.authService.getToken();
      this.t = token;

      this.eventService.eventList()
      .subscribe(
        (events: Events[]) => this.events = events,
        (error: Response) => console.log(error)
      );
  }

  onSubmit(form: NgForm){
  	this.eventService.postEvent(form.value.title, form.value.date, form.value.venue, form.value.rule1, form.value.rule2, form.value.rule3, form.value.rule4, form.value.rule5, form.value.rule6, form.value.rule7, form.value.rule8, form.value.rule9, form.value.rule10)
  	.subscribe(
  		response => console.log(response),
  		error => console.log(error)
  	);
  }

  delete(id: number){
    this.eventService.deleteEvent(id)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );
    console.log(id);
  }

}
