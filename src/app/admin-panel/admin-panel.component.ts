import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private sidenav: MatSidenavModule,private authService: AuthService) { }
  t: string;

  ngOnInit() {
  	this.authService.getIp().subscribe(data => {
      console.log(data);
    });
  	const token = this.authService.getToken();
    this.t = token;
  }
}
