import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesOpportunity } from '../../../../models/SalesOpportunity';
import { environment } from '../../../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private readonly httpClient: HttpClient) { }

  getSales(){
    return this.httpClient.get<SalesOpportunity[]>(environment.apiUrl+'/sales-opportunity')
  }

  create(salesOpportunity: {customerID: string, estimatedValue: number, closingDate: string, salesStage: string}){
    return this.httpClient.post<SalesOpportunity>(environment.apiUrl+'/sales-opportunity',salesOpportunity);
  }

  updateSales(salesOpportunity: SalesOpportunity){
    return this.httpClient.put<SalesOpportunity>(environment.apiUrl+'/sales-opportunity/'+salesOpportunity.opportunityID,salesOpportunity);
  }

  updateNotificationSchedule(cron: string){
    return this.httpClient.post<{id: string, taskName: string, cronExpression: string}>(environment.apiUrl+'/sales-opportunity/setReminderSchedule',{cronExpression: cron});
  }

  updateClosingSchedule(cron: string){
    return this.httpClient.post<{id: string, taskName: string, cronExpression: string}>(environment.apiUrl+'/sales-opportunity/setClosingSchedule',{cronExpression: cron});
  }
}
