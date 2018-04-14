import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { routes } from './app.router';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MembersComponent } from './members/members.component';
import { PostEventComponent } from './post-event/post-event.component';
import { MembersService } from './services/members.service';
import { EventsService } from './services/events.service';
import { AuthService } from './services/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ParticipantsComponent } from './participants/participants.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    HeaderComponent,
    FooterComponent,
    MembersComponent,
    PostEventComponent,
    WelcomeComponent,
    EventComponent,
    AboutComponent,
    TeamComponent,
    ParticipantsComponent,
    AdminSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    routes,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAmVhCo-OGZoLMWBlXKSRFRZmCA81lcs0'
    })
  ],
  providers: [
    MembersService,
    EventsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
