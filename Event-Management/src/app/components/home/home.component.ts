import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private router: Router,
    private vendorService: VendorService
  ) {}

  vendors: any;
  ngOnInit(): void {
    this.vendorService.getVendors().subscribe({
      next: (v) => {
        this.vendors = v;
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }

  onCardClick(vendorId: string) {
    this.router.navigate(['/vendorDetails', vendorId]);
  }
}
