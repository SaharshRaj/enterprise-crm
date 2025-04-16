import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupportTicket } from '../../../../models/SupportTicket';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CustomerSupportService {

  
private apiUrl = environment.apiUrl+'/support'

constructor(private http: HttpClient) {}

createSupportTicket(ticket: SupportTicket): Observable<SupportTicket> {
  return this.http.post<SupportTicket>(this.apiUrl, ticket);
}

  
updateTicketStatus(ticketId: number, status: string): Observable<SupportTicket> {
  return this.http.patch<SupportTicket>(`${this.apiUrl}/${ticketId}/status`, null, {
  params: { status }
  });
  }
  
}


