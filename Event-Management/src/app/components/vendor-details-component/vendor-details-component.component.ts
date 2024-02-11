import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EventService } from 'src/app/services/event.service';
import { EvenT, Order } from '../event-generator/event-interface';
import { __values } from 'tslib';

@Component({
  selector: 'app-vendor-details-component',
  templateUrl: './vendor-details-component.component.html',
  styleUrls: ['./vendor-details-component.component.css'],
})
export class VendorDetailsComponentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private eventservice: EventService,
    private fb: FormBuilder
  ) {
    this.createEventFrom();
  }
  vendor: any;
  selectedEvent: EvenT = new EvenT();
  events: EvenT[] = [];
  selctedService: any;
  eventForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.events = this.eventservice.getEvents();
    this.route.paramMap.subscribe((params) => {
      this.apiService.getData(`/api/v1/home/${params.get('id')}`).subscribe({
        next: (v) => {
          console.log(v);
          this.vendor = v;
        },
        error: (e) => {
          return Promise.reject(false);
        },
        complete: () => {},
      });
    });
  }
  createEventFrom() {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
    });
  }

  addorder(order: Order) {
    order.vendorId = this.vendor.id;
    order.companyName = this.vendor.companyName;
    this.eventservice.addOrdertoEvent(this.selectedEvent.eventName, order);
  }
  createEvent() {
    const eventObj = new EvenT();
    eventObj.eventName = this.eventForm.value.eventName;
    this.eventservice.events.push(eventObj);
    this.selectedEvent = eventObj;
  }

  finalaliseEvent() {
    console.log(this.eventForm);
    this.eventservice.finalEventplace(this.selectedEvent.eventName);
  }
}
