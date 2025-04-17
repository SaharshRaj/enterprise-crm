//import { SalesOpportunity } from './../../../../../models/SalesOpportunity';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-tabs-sales',
//   standalone: false,
//   templateUrl: './tabs-sales.component.html',
//   styleUrl: './tabs-sales.component.scss'
// })
// export class TabsSalesComponent implements OnInit {
//   salesData: SalesData[] = [];
//   loading: boolean = true;
//   error: string = '';

//   constructor(private analyticsService: AnalyticsService) { }

//   ngOnInit(): void {
//     this.loadSalesData();
//   }

//   loadSalesData(): void {
//     this.loading = true;
//     this.analyticsService.getSalesData().subscribe({
//       next: (data) => {
//         this.salesData = data;
//         this.loading = false;
//       },
//       error: (error) => {
//         this.error = 'Error fetching sales data.';
//         console.error('Error loading sales data:', error);
//         this.loading = false;
//       }
//     });
//   }
// }
// Example: src/app/services/analytics.service.ts
import { Component, OnInit } from '@angular/core';
import {SalesOpportunity, SalesStage,} from '../../../../../models/SalesOpportunity';
import { HttpErrorResponse } from '@angular/common/http'; 
import { AnalyticsService } from '../../service/analytics.service';

@Component({
  selector: 'app-tabs-sales',
  templateUrl: './tabs-sales.component.html',
  styleUrls: ['./tabs-sales.component.css']
})
export class TabsSalesComponent implements OnInit {
  salesData: SalesOpportunity[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private analyticsService: AnalyticsService) { }

  ngOnInit(): void {
    this.loadSalesData();
  }

  loadSalesData(): void {
    this.loading = true;
    this.analyticsService.getSalesData().subscribe({
      next: (data: SalesOpportunity[]) => { 
        this.salesData = data;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => { 
        this.error = 'Error fetching sales data.';
        console.error('Error loading sales data:', error);
        this.loading = false;
      }
    });
  }
}