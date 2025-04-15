import { Component, Input } from '@angular/core';
import { CustomerSupportComponent } from '../../customer-support.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tickets',
  standalone: false,
  templateUrl: './view-tickets.component.html',
  styleUrl: './view-tickets.component.scss'
})
export class ViewTicketsComponent {

  @Input() customers: CustomerSupportComponent[] = [];
  pagedCustomers: CustomerSupportComponent[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 1;
  pagedTickets: any;

  constructor(private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.updatePagedCustomers();
  }

  ngOnChanges(): void {
    this.updatePagedCustomers();
  }

  updatePagedCustomers(): void {
    this.totalPages = Math.ceil(this.customers.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedCustomers = this.customers.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedCustomers();
    }
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  viewActions(customer: CustomerSupportComponent): void {
    this.router.navigate(['/customer-actions']); // Navigate to customer-actions page with ID
  }

}



 
