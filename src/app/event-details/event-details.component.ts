import {Component, Input} from '@angular/core';
import {EventDetails} from "../models/event-details";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {
  @Input() event!: EventDetails;
}
