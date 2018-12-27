import {Component, OnInit} from '@angular/core';
import {EventService} from './event.service';
import {ToastrService} from '../common/toastr.service';

@Component({
  template: `
    <div>
      <h4>List of Events</h4>
      <div class="row">
        <app-event-thumbnail *ngFor="let event of events" class="col-md-2" (mouseenter)="toastMessage(event.name)"
                             (eventEmitter)="handleEventClicked($event)" [event]="event"></app-event-thumbnail>
      </div>
    </div>
  `,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(data) {
    console.log('data geldi: ' + data);
  }

  toastMessage(name: string) {
    this.toastr.success(`Click to enter detail page for ${name} conference`);
    // this.toastr.info('deneme', 'Uyarı');
    // this.toastr.error('deneme', 'Uyarı');
    // this.toastr.warning('deneme', 'Uyarı');
  }
}
