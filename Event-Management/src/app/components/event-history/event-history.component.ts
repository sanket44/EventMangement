import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { EvenT } from '../event-generator/event-interface';

@Component({
  selector: 'app-event-history',
  templateUrl: './event-history.component.html',
  styleUrls: ['./event-history.component.css'],
})
export class EventHistoryComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private apiservice: ApiService
  ) {}
  selectedEvent: any;
  events: any[] = [];
  ngOnInit(): void {
    this.apiservice
      .getData(`api/v1/user/getEvents/${this.authService.getUser().userId}`)
      .subscribe({
        next: (v) => {
          this.events = v;
        },
        error: (e) => {
          return Promise.reject(false);
        },
        complete: () => {},
      });
  }
}
