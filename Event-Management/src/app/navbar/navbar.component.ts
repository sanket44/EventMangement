import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    public eventService: EventService,
    private route: Router
  ) {}
  logout() {
    this.authService.logout();
    this.route.navigate(['/home']);
  }
}
