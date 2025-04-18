import { environment } from './../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerProfile } from '../../../../models/CustomerProfile';
import { SupportTicket } from '../../../../models/SupportTicket';
import { SalesOpportunity } from '../../../../models/SalesOpportunity';
import { CustomerReport, MarketingReport, SalesReport, SupportReport } from '../../../../models/Analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private readonly httpClient: HttpClient) {}

  getCustomers() {
    return this.httpClient.get<CustomerProfile[]>(
      environment.apiUrl + '/customers',
    );
  }

  getSupport() {
    return this.httpClient.get<SupportTicket[]>(
      environment.apiUrl + '/supportTicket',
    );
  }

  getSales() {
    return this.httpClient.get<SalesOpportunity[]>(
      environment.apiUrl + '/sales',
    );
  }

  generateCustomerReport(){
    return this.httpClient.post<CustomerReport>(environment.apiUrl + `/analytics/customers`, null)
  }  
}
