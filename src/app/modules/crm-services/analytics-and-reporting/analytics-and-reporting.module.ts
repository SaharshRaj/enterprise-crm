import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsAndReportingComponent } from '../../../pages/crm-services/analytics-and-reporting/analytics-and-reporting.component';
import { AnalyticsService } from '../../../pages/crm-services/analytics-and-reporting/service/analytics.service';
import { HeaderComponent } from '../../../pages/crm-services/analytics-and-reporting/components/header/header.component';
import { AnalyticsStatsComponent } from '../../../pages/crm-services/analytics-and-reporting/components/stats/stats.component';
import { FluidModule } from 'primeng/fluid';
import { SalesAutomationModule } from '../sales-automation/sales-automation.module';
import { CustomermoduleComponent } from '../../../pages/crm-services/analytics-and-reporting/components/customermodule/customermodule.component';
import { ChartModule } from 'primeng/chart';
import { MarketingmoduleComponent } from '../../../pages/crm-services/analytics-and-reporting/components/marketingmodule/marketingmodule.component';
import { SupportmoduleComponent } from '../../../pages/crm-services/analytics-and-reporting/components/supportmodule/supportmodule.component';
import { LandingModule } from '../../pages/landing/landing.module';
import { TabsSalesComponent } from '../../../pages/crm-services/analytics-and-reporting/components/tabs-sales/tabs-sales.component';
import { TabsCustomerComponent } from '../../../pages/crm-services/analytics-and-reporting/components/tabs-customer/tabs-customer.component';
import { TabsSupportComponent } from '../../../pages/crm-services/analytics-and-reporting/components/tabs-support/tabs-support.component';
import { TabsMarketingComponent } from '../../../pages/crm-services/analytics-and-reporting/components/tabs-marketing/tabs-marketing.component';

@NgModule({
  declarations: [
    AnalyticsAndReportingComponent,
    HeaderComponent,
    AnalyticsStatsComponent,
    CustomermoduleComponent,
    MarketingmoduleComponent,
    SupportmoduleComponent,
    TabsSalesComponent,
    TabsCustomerComponent,
    TabsSupportComponent,
    TabsMarketingComponent,
  ],
  imports: [
    CommonModule,
    FluidModule,
    SalesAutomationModule,
    ChartModule,
    LandingModule
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsAndReportingModule { }
