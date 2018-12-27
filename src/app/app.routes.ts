import {EventListComponent} from './events/event-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Page404Component} from './error/page404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventListComponent},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: '404', component: Page404Component},
  {path: '', redirectTo: 'events', pathMatch: 'full'}
];
