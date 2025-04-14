import { Component, Input, OnInit } from '@angular/core';
import { SupportTicket } from '../../../../models/SupportTicket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-tickets',
  standalone: false,
  templateUrl: './view-tickets.component.html',
  styleUrl: './view-tickets.component.scss'
})
export class ViewTicketsComponent implements OnInit{
  
  @Input() tickets: SupportTicket[] = [];
  pagedTickets: SupportTicket[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.updatePagedTickets();
  }

  ngOnChanges(): void {
    this.updatePagedTickets();
  }

  updatePagedTickets(): void {
    this.totalPages = Math.ceil(this.tickets.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedTickets = this.tickets.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedTickets();
    }
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  viewActions(ticket: SupportTicket): void {
    this.router.navigate(['/ticket-actions', ticket.ticketID]);
  }
}


