import { SupportTicket } from './../../../../../models/SupportTicket';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CustomerSupportComponent } from '../../customer-support.component';
import { Router } from '@angular/router';
import { CustomerSupportService } from '../../service/customer-support.service';

@Component({
  selector: 'app-view-tickets',
  standalone: false,
  templateUrl: './view-tickets.component.html',
  styleUrl: './view-tickets.component.scss'
})
export class ViewTicketsComponent implements OnInit, OnChanges{

  @Input({required: true}) customers: SupportTicket[] | null = [];
  pagedCustomers: SupportTicket[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 1; 

  constructor(private router: Router, private customerSupportService: CustomerSupportService) {} // Inject Router

  ngOnInit(): void {
    this.updatePagedCustomers();
  }

  ngOnChanges(): void {
    this.updatePagedCustomers();
  }

  handleDelete(id: string){
    this.pagedCustomers = this.pagedCustomers.filter((ticket)=> ticket.ticketID !== id)
    this.customerSupportService.deleteTicket(id).subscribe(()=>console.log("deleted"));
  }

  updatePagedCustomers(): void {
    this.totalPages = this.customers ? Math.ceil(this.customers.length / this.pageSize) : 0;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedCustomers = this.customers ? this.customers.slice(startIndex, endIndex) : [];
    console.log(this.pagedCustomers)
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



 
