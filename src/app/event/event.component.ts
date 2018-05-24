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

    if(form.value.email == this.email && form.value.otp == this.otp){
      this.eventsService.register(form.value.name, form.value.roll_no, form.value.phone, form.value.email, form.value.otp, this.id)
      .subscribe(
        response => this.code =response.status,
        error => this.code = error.status,
       );
       setTimeout(()=>{
          if(this.code == 409){
            this.message = 'Already Registered';
          }else if(this.code == 201){
            this.message = 'Registered Succesfully';
          }
        },2500) 
      }else{
        this.message = 'invalid otp';
      }
  }
  sendOtp(email){

    if(email.value == null){
      alert('email is required');
    }
    else{
      alert('otp is sent to your email');
    }
    this.eventsService.sendOtp(email.value)
     .subscribe(
        response => this.otp = response,
        error => console.log(error)
        
     );

    this.email = email.value;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
