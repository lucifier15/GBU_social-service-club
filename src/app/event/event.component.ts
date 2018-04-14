import { Component, OnInit ,OnDestroy} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { EventsService } from '../services/events.service';
import { Events } from '../../interfaces.interface';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResponseOptions } from '@angular/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	
	event: Events[];
  id: number;
  private sub: any;
  name : string;
  otp: number;
  email: string;
  message : any;
  code: number;
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

  onSubmit(form: NgForm){
    this.eventsService.register(form.value.name, form.value.roll_no, form.value.phone, form.value.email, form.value.otp, this.id)
    .subscribe(
      response => console.log(response),
      error => console.log(error)
    );

  }
  sendOtp(email){

    if(email.value == null){
      this.message = 'email is required';
    }
    else{
      this.message = 'otp sent';
    }
    this.eventsService.sendOtp(email.value)
     .subscribe(
        response => console.log(response),
        error => console.log(error)
        
     );

    this.email = email.value;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
