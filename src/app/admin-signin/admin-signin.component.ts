import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {

  constructor(private authService: AuthService) { }
  error: string;
  token: any;
  message: string;
  ngOnInit() {
    
  }

  onSignin(form: NgForm){
  	this.authService.adminSignIn(form.value.email,form.value.password)
  		.subscribe(
  			tokenData => this.token=tokenData,
  			error => this.error= error
  		);
  }
}
