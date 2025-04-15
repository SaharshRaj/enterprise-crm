import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupportTicket } from '../../../../models/SupportTicket';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CustomerSupportService {
  updateNotificationSchedule: any;
  create: any;
  updateClosingSchedule: any;

  
private apiUrl = 'http://your-backend-url/api/support-tickets';

constructor(private http: HttpClient) {}

createSupportTicket(ticket: SupportTicket): Observable<SupportTicket> {
  return this.http.post<SupportTicket>(this.apiUrl, ticket);
}
}

