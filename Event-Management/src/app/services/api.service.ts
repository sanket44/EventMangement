import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'https://api.example.com'; // Replace with your API URL

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Method to create headers with the authentication token
  private createHeaders(): HttpHeaders {
    const authToken = this.authService.getAuthToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken,
    });
  }

  // Example API call to get data
  getData(url: string): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(`${url}`, { headers });
  }

  // Example API call to post data
  postData(url: string, data: any): Observable<any> {
    const headers = this.createHeaders();
    console.log(headers);
    return this.http.post<any>(`${url}`, data, { headers });
  }
}
