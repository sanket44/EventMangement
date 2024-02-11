import { Injectable, OnInit } from '@angular/core';
import { EvenT, Order } from '../components/event-generator/event-interface';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  events: EvenT[] = [];

  getEvents(): EvenT[] {
    return this.events;
  }

  addOrdertoEvent(eventName: String, order: Order) {
    let matchingEvent = this.getEvents().find(
      (ent) => ent.eventName == eventName
    );
    if (matchingEvent && matchingEvent.orders.indexOf(order) === -1) {
      matchingEvent.orders.push(order);
    }
  }

  finalEventplace(eventName: String) {
    let event = this.getEvents().find((ent) => ent.eventName == eventName);
    console.log(event);

    if (event) {
      this.apiService.postData(`/api/v1/order/placeOrder`, event).subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(err);
        },
      });
    }
  }
}
