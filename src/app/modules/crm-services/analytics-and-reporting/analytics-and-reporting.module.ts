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
import { TabsComponent } from '../../../pages/landing/components/tabs/tabs.component';
import { LandingModule } from '../../pages/landing/landing.module';
import { TabsSalesComponent } from '../../../pages/crm-services/analytics-and-reporting/components/tabs-sales/tabs-sales.component';

@NgModule({
  declarations: [
    AnalyticsAndReportingComponent,
    HeaderComponent,
    AnalyticsStatsComponent,
    CustomermoduleComponent,
    MarketingmoduleComponent,
    SupportmoduleComponent,
    TabsSalesComponent,
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
