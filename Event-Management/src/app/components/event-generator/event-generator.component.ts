import { Component, OnInit } from '@angular/core';
import { EvenT, Order } from './event-interface';
import { EventService } from 'src/app/services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-generator',
  templateUrl: './event-generator.component.html',
  styleUrls: ['./event-generator.component.css'],
})
export class EventGeneratorComponent implements OnInit {
  constructor(
    public eventService: EventService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  eventForm: FormGroup = new FormGroup({});
  events: EvenT[] = [];
  selectedEvent: EvenT = new EvenT();
  ngOnInit(): void {
    this.createEventFrom();
    this.events = this.eventService.getEvents();
  }
  createEventFrom() {
    this.eventForm = this.fb.group({
      eventName: [, Validators.required],
      address: [, Validators.required],
      contactNo: [
        ,
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  createEvent() {
    const eventObj = new EvenT();
    eventObj.eventName = this.eventForm.value.eventName;
    this.eventService.events.push(eventObj);
    this.selectedEvent = eventObj;
    this.router.navigate(['/home']);
  }
}
