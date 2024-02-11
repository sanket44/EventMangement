import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // You can modify the request before it's sent to the server
    // For example, you can add headers or authentication tokens here
    const modifiedRequest = request.clone({
      // Add your headers here if needed
      // headers: request.headers.set('Authorization', 'Bearer your-auth-token')
    });

    // Continue with the modified request
    return next.handle(modifiedRequest);
  }
}
