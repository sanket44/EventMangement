import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor.interceptor';
import { EventGeneratorComponent } from './components/event-generator/event-generator.component';
import { VendorDetailsComponentComponent } from './components/vendor-details-component/vendor-details-component.component';
import { CateringOrderComponent } from './components/orderForms/catering-order/catering-order.component';
import { FlowersOrderComponent } from './components/orderForms/flowers-order/flowers-order.component';
import { EventHistoryComponent } from './components/event-history/event-history.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    EventGeneratorComponent,
    VendorDetailsComponentComponent,
    CateringOrderComponent,
    FlowersOrderComponent,
    EventHistoryComponent,
    ConfirmOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
