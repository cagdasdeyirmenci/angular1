import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Page404Component} from './error/page404.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
