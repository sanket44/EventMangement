import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { EventGeneratorComponent } from './components/event-generator/event-generator.component';
import { VendorDetailsComponentComponent } from './components/vendor-details-component/vendor-details-component.component';
import { EventHistoryComponent } from './components/event-history/event-history.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'eventHistory', component: EventHistoryComponent },
  { path: 'eventCreator', component: EventGeneratorComponent },
  { path: 'confirmOrder', component: ConfirmOrderComponent },
  { path: 'vendorDetails/:id', component: VendorDetailsComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/home' }, // Wildcard route (for handling 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
