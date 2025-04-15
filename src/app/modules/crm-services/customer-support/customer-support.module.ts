import { CreateTicketComponent } from './../../../pages/crm-services/customer-support/components/create-ticket/create-ticket.component';
// import { HeaderComponent } from './../../../pages/crm-services/customer-support/components/header/header.component';
import { ViewTicketsComponent } from './../../../pages/crm-services/customer-support/components/view-tickets/view-tickets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSupportComponent } from '../../../pages/crm-services/customer-support/customer-support.component';
import { CustomerSupportService } from '../../../pages/crm-services/customer-support/service/customer-support.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerSupportComponent,ViewTicketsComponent,CreateTicketComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerSupportService
  ]
})
export class CustomerSupportModule { }
