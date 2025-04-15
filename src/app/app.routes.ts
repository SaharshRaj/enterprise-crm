import { Routes } from '@angular/router';
import { AuthGuard } from './core/gaurds/auth/auth.gaurd';
import { AdminComponent } from './pages/admin/admin.component';
import { EmployeeComponent } from './pages/admin/employee/employee.component';
import { UpdateEmployeeComponent } from './pages/admin/update-employee/update-employee.component';
import { AccessComponent } from './pages/auth/access/access.component';
import { ErrorComponent } from './pages/auth/error/error.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SalesAutomationComponent } from './pages/crm-services/sales-automation/sales-automation.component';
import { CustomerDataManagementComponent } from './pages/crm-services/customer-data-management/customer-data-management.component';
import { CustomerSupportComponent } from './pages/crm-services/customer-support/customer-support.component';
import { MarketingAutomationComponent } from './pages/crm-services/marketing-automation/marketing-automation.component';
import { AnalyticsAndReportingComponent } from './pages/crm-services/analytics-and-reporting/analytics-and-reporting.component';
import { ViewTicketsComponent } from './pages/crm-services/customer-support/components/view-tickets/view-tickets.component';
import { CreateTicketComponent } from './pages/crm-services/customer-support/components/create-ticket/create-ticket.component';
// import { HeaderComponent } from './pages/crm-services/customer-support/components/header/header.component';

export const appRoutes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthGuard] },
  {
    path: 'pages',
    children: [
      {path: '', redirectTo: 'landing', pathMatch: "full"},
      { path: 'landing', component: LandingComponent },
      {
        path: 'admin',
        children: [
          { path: '', component: AdminComponent ,},
          { path: 'employee/add', component: EmployeeComponent },
          { path: 'employee/:id', component: UpdateEmployeeComponent },
        ],
        canActivate: [AuthGuard],
      },
      {
        path: 'services',
        children: [
          {path: '', redirectTo: 'customer-data-management', pathMatch: "full"},
          {path: 'customer-data-management', component: CustomerDataManagementComponent},
          {path: 'sales-automation', component: SalesAutomationComponent},
          {path: 'customer-support', component: CustomerSupportComponent},
          {path: 'marketing-automation', component: MarketingAutomationComponent},
          {path: 'analytics-and-reporting', component: AnalyticsAndReportingComponent},
          {path: 'customer-support-component', component: ViewTicketsComponent},
          {path: 'customer-support-component', component: CreateTicketComponent}
        ],
        canActivate: [AuthGuard]
      }
    ],
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'access', component: AccessComponent },
    ],
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];
