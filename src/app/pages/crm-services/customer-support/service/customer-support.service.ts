import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupportTicket } from '../../../../models/SupportTicket';
import { environment } from '../../../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class CustomerSupportService {



  // apiUrl = environment.apiUrl;

  // constructor(private http: HttpClient) {}

  // getAllTickets(): Observable<SupportTicket[]> {
  //   return this.http.get<SupportTicket[]>(this.apiUrl);
  //   }
    
  // createTicket(ticket: SupportTicket): Observable<SupportTicket> {
  //   return this.http.post<SupportTicket>(this.apiUrl, ticket);
  // }
    
  // getTicketById(ticketId: number): Observable<SupportTicket> {
  //   return this.http.get<SupportTicket>(`${this.apiUrl}/${ticketId}`);
  // }
    
  // getTicketsByCustomer(customerId: number): Observable<SupportTicket[]> {
  //   return this.http.get<SupportTicket[]>(`${this.apiUrl}/customer/${customerId}`);
  // }

  // getTicketsByStatus(status: string): Observable<SupportTicket[]> {
  //   return this.http.get<SupportTicket[]>(`${this.apiUrl}/status/${status}`);
  // }
  
  // updateTicketStatus(ticketId: number, status: string): Observable<SupportTicket> {
  //    return this.http.patch<SupportTicket>(`${this.apiUrl}/${ticketId}/status`, { status });
  // }
  
  // deleteTicket(ticketId: number): Observable<string> {
  //  return this.http.delete<string>(`${this.apiUrl}/${ticketId}`);
  // }
  
  // assignTicketToAgent(ticketId: number, agentId: number): Observable<SupportTicket> {
  //   return this.http.put<SupportTicket>(`${this.apiUrl}/${ticketId}/${agentId}`, {});
  // }
  
}   

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { SupportTicket } from '../../../../models/SupportTicket';

// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerSupportService {
//   private apiUrl = 'http://localhost:3005/api/support';

//   constructor(private http: HttpClient) {}

//   getAllTickets(): Observable<SupportTicket[]> {
//     return this.http.get<SupportTicket[]>(this.apiUrl);
//   }

//   createTicket(ticket: SupportTicket): Observable<SupportTicket> {
//     return this.http.post<SupportTicket>(this.apiUrl, ticket);
//   }

//   getTicketById(ticketId: number): Observable<SupportTicket> {
//     return this.http.get<SupportTicket>(`${this.apiUrl}/${ticketId}`);
//   }

//   getTicketsByCustomer(customerId: number): Observable<SupportTicket[]> {
//     return this.http.get<SupportTicket[]>(`${this.apiUrl}/customer/${customerId}`);
//   }

//   getTicketsByStatus(status: string): Observable<SupportTicket[]> {
//     return this.http.get<SupportTicket[]>(`${this.apiUrl}/status/${status}`);
//   }

//   updateTicketStatus(ticketId: number, status: string): Observable<SupportTicket> {
//     return this.http.patch<SupportTicket>(`${this.apiUrl}/${ticketId}/status`, { status });
//   }

//   deleteTicket(ticketId: number): Observable<string> {
//     return this.http.delete<string>(`${this.apiUrl}/${ticketId}`);
//   }

//   assignTicketToAgent(ticketId: number, agentId: number): Observable<SupportTicket> {
//     return this.http.put<SupportTicket>(`${this.apiUrl}/${ticketId}/${agentId}`, {});
//   }
// }
