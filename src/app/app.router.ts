import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MembersComponent } from './members/members.component';
import { PostEventComponent } from './post-event/post-event.component';

export const router:Routes = [
	{ path: '', redirectTo: 'post-event', pathMatch: 'full'},
	{ path: 'admin-panel', component: AdminPanelComponent },
	{ path: 'members', component: MembersComponent },
	{ path: 'post-event', component: PostEventComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
