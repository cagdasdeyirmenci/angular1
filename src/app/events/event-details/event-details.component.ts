import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'event-details.component.html'
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }

}
