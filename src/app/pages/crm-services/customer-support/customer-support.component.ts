import { Component, OnInit } from '@angular/core';
// import { CustomerSupportService } from './service/customer-support.service';
// import { SupportTicket } from '../../../models/SupportTicket';
 
@Component({
   selector: 'app-customer-support',
   standalone: false,
   templateUrl: './customer-support.component.html',
   styleUrls: ['./customer-support.component.scss']
  })
export class CustomerSupportComponent {

// title = 'support-dashboard';
// tickets: SupportTicket[] = [
// { ticketID: 'T-1001', subject: 'Cannot access dashboard', customer: 'Acme Corp', priority: 'high', created: new Date('1/4/2023, 10:30 am'), assignedTo: 'Jane Doe' },
// { ticketID: 'T-1003', subject: 'Feature request: Export to PDF', customer: 'Umbrella Corp', priority: 'low', created: new Date('2/4/2023, 2:45 pm'), assignedTo: 'Unassigned' }
// ];

//   selectedTab: string = 'open';

//   constructor(private customerSupportService: CustomerSupportService) {}

//   ngOnInit(): void {
//     this.loadTickets();
//   }

//   loadTickets(): void {
//     this.customerSupportService.getAllTickets().subscribe((data: SupportTicket[]) => {
//       this.tickets = data;
//     });
//   }

//   selectTab(tabName: string): void {
//     this.selectedTab = tabName;
//     // Load tickets based on the selected tab
//     if (tabName === 'open') {
//       this.customerSupportService.getTicketsByStatus('open').subscribe((data: SupportTicket[]) => {
//         this.tickets = data;
//       });
//     } else if (tabName === 'closed') {
//       this.customerSupportService.getTicketsByStatus('closed').subscribe((data: SupportTicket[]) => {
//         this.tickets = data;
//       });
//     }
//   }
}

