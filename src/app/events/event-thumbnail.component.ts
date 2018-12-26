import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="card">
      <div class="card-body">
        <div>Name of events: {{event.name}}</div>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Location: {{event.location.address}}</div>
      </div>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;

  @Output() eventEmitter = new EventEmitter();

  clickHandler() {
    this.eventEmitter.emit(this.event.name + ' denemeeeeeeeeeeeeeee');
  }

}

