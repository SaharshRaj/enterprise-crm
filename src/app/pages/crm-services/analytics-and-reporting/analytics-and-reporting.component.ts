import { SupportTicket } from './../../../models/SupportTicket';
import { AnalyticsService } from './service/analytics.service';
import { CustomerProfile } from './../../../models/CustomerProfile';
import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales-automation/service/sales.service';
import { SalesOpportunity } from '../../../models/SalesOpportunity';
import { Observable, of } from 'rxjs';
import { CustomersService } from '../customer-data-management/service/customers.service';
import { CustomerSupportService } from '../customer-support/service/customer-support.service';
import { StatsComponent } from '../sales-automation/components/stats/stats.component';
import { HeaderComponent } from './components/header/header.component';
import { TabsSalesComponent } from './components/tabs-sales/tabs-sales.component';
import { CustomerDataManagementComponent } from '../customer-data-management/customer-data-management.component';
import { TabsCustomerComponent } from './components/tabs-customer/tabs-customer.component';
import { TabsSupportComponent } from './components/tabs-support/tabs-support.component';
import { TabsMarketingComponent } from './components/tabs-marketing/tabs-marketing.component';
@Component({
  selector: 'app-analytics-and-reporting',
  standalone: false,
  templateUrl: './analytics-and-reporting.component.html',
  styleUrl: './analytics-and-reporting.component.scss'
})
export class AnalyticsAndReportingComponent implements OnInit{

  salesList$!:Observable<SalesOpportunity[]>;
  customerList$!:Observable<CustomerProfile[]>;
  customerSupportList$!:Observable<SupportTicket[]>;

  // Mock Customer Data Array (IN THE FILE)
  mockCustomers: CustomerProfile[] = [
    {
      customerID: 201,
      name: 'Rajesh Kumar',
      emailId: 'rajesh.kumar@example.com',
      phoneNumeber: '91-9876543210',
      purchaseHistory: ['Electronics - 2025-04-05', 'Books - 2025-04-12','Electronics - 2025-04-05','Electronics - 2025-04-05','Electronics - 2025-04-05'],
      segmentationData: { Interest: 'Technology', Region: 'South', "Purchasing Habits": 'Frequent Online Buyer' },
    },
    {
      customerID: 202,
      name: 'Priya Sharma',
      emailId: 'priya.sharma@example.com',
      phoneNumeber: '91-8765432109',
      purchaseHistory: ['Apparel - 2025-04-01'],
      segmentationData: { Interest: 'Fashion', Region: 'North', "Purchasing Habits": 'Seasonal Spender' },
    },
    {
      customerID: 203,
      name: 'Amit Patel',
      emailId: 'amit.patel@example.com',
      phoneNumeber: '91-7654321098',
      purchaseHistory: [],
      segmentationData: { Interest: 'Travel', Region: 'West', "Purchasing Habits": 'Occasional Big Purchases' },
    },
    {
      customerID: 204,
      name: 'Sneha Verma',
      emailId: 'sneha.verma@example.com',
      phoneNumeber: '91-6543210987',
      purchaseHistory: ['Home Decor - 2025-03-28', 'Kitchenware - 2025-04-15'],
      segmentationData: { Interest: 'Home & Living', Region: 'East', "Purchasing Habits": 'Value-Conscious' },
    },
    {
      customerID: 205,
      name: 'Rahul Singh',
      emailId: 'rahul.singh@example.com',
      phoneNumeber: '91-5432109876',
      purchaseHistory: ['Books - 2025-04-10'],
      segmentationData: { Interest: 'Literature', Region: 'Central', "Purchasing Habits": 'Regular Small Purchases' },
    },
  ];

  mockSupport: SupportTicket[] = [
    {
      ticketID: '1',
      customerID: '1',
      priority: 'High',
      created: new Date(),
      assignedAgent: '1',
      issueDescription: 'Sample issue description for testing.',
      status: 'Open'
  },
  {
    ticketID: '2',
    customerID: '2',
    priority: 'Low',
    created: new Date(),
    assignedAgent: '4',
    issueDescription: 'Sample issue description for testing.',
    status: 'closed'
  },
  {
    ticketID: '3',
    customerID: '3',
    priority: 'High',
    created: new Date(),
    assignedAgent: '3',
    issueDescription: 'Sample issue description for testing.',
    status: 'Open'
},
{
  ticketID: '4',
  customerID: '4',
  priority: 'Low',
  created: new Date(),
  assignedAgent: '4',
  issueDescription: 'Sample issue description for testing.',
  status: 'closed'
},
{
  ticketID: '5',
  customerID: '5',
  priority: 'High',
  created: new Date(),
  assignedAgent: '5',
  issueDescription: 'Sample issue description for testing.',
  status: 'Open'
},
  ];


  constructor(private readonly salesService: SalesService,
              private readonly customersService : CustomersService,
              private readonly customerSupportService : CustomerSupportService
    ){}

  ngOnInit(): void {
    this.salesList$ = this.salesService.getSales();
    

    // this.customerList$ = this.customersService.getCustomers(); // Assuming 'getCustomers()' method in CustomerService
    this.customerList$ = this.getMockCustomerData();
    this.customerSupportList$ = this.getMockCustomerSupport();
  }

  getMockCustomerData(): Observable<CustomerProfile[]> {
    return of(this.mockCustomers);
  }
  
  getMockCustomerSupport(): Observable<SupportTicket[]>{
    return of(this.mockSupport);
  }

  tabs = [
    {label: "Customer Data Management", content: TabsCustomerComponent},
    {label: "Sales Automation", content: TabsSalesComponent},
    {label: "Customer Support", content: TabsSupportComponent},
    {label: "Marketing Automation", content: TabsMarketingComponent},
  ]

}
