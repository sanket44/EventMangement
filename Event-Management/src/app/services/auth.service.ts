import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: any;
  private user: any;

  constructor(private http: HttpClient, private router: Router) {
    this.authToken = localStorage.getItem('token');
    this.user = localStorage.getItem('user');
  }

  // Method to perform login and get the bearer tokenH
  login(credentials: any): Promise<boolean> {
    this.authToken = '';
    this.http
      .post<any>('http://localhost:8080/api/v1/auth/authenticate', credentials)
      .subscribe({
        next: (v) => {
          this.authToken = JSON.stringify(v.token);
          this.user = JSON.stringify(v.user);
          localStorage.setItem('token', this.authToken);
          localStorage.setItem('user', this.user);
        },
        error: (e) => {
          return Promise.reject(false);
        },
        complete: () => {
          this.router.navigate(['home']);
        },
      });
    // Resolve the promise with true to indicate successful login
    return Promise.resolve(true);
  }

  // Method to get the bearer token
  getAuthToken(): string {
    return JSON.parse(this.authToken);
  }

  getUser(): any {
    return JSON.parse(this.user);
  }
  // Method to log out and remove the token
  logout(): void {
    this.authToken = null;
    localStorage.removeItem('token');
  }
  loggedIn(): boolean {
    return this.authToken ? true : false;
  }
}
