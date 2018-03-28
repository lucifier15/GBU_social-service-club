import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MembersComponent } from './members/members.component';
import { PostEventComponent } from './post-event/post-event.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ParticipantsComponent } from './participants/participants.component';

export const router:Routes = [
	{ path: '', redirectTo: 'welcome', pathMatch: 'full'},
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'welcome/event/:id', component: EventComponent },
	{ path: 'about', component: AboutComponent},
	{ path: 'team',component: TeamComponent},
	{ path: 'admin-panel', component: AdminPanelComponent },
	{ path: 'admin-panel/members', component: MembersComponent },
	{ path: 'admin-panel/post-event', component: PostEventComponent },
	{ path: 'admin-panel/participants', component: ParticipantsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
