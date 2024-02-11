import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
})
export class ConfirmOrderComponent implements OnInit {
  constructor(private eventService: EventService) {}
  selectedEvent: any;
  events: any[] = [];
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  finalaliseEvent() {
    this.eventService.finalEventplace(this.selectedEvent.eventName);
  }
}
