'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">enterprise-crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AccessComponent.html" data-type="entity-link" >AccessComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminComponent.html" data-type="entity-link" >AdminComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AnalyticsAndReportingComponent.html" data-type="entity-link" >AnalyticsAndReportingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AnalyticsStatsComponent.html" data-type="entity-link" >AnalyticsStatsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppConfigurator.html" data-type="entity-link" >AppConfigurator</a>
                            </li>
                            <li class="link">
                                <a href="components/CardComponent.html" data-type="entity-link" >CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateCampaignComponent.html" data-type="entity-link" >CreateCampaignComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateTicketComponent.html" data-type="entity-link" >CreateTicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerDataManagementComponent.html" data-type="entity-link" >CustomerDataManagementComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerListComponent.html" data-type="entity-link" >CustomerListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerManagementHeaderComponent.html" data-type="entity-link" >CustomerManagementHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomermoduleComponent.html" data-type="entity-link" >CustomermoduleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomersAnalyticsComponent.html" data-type="entity-link" >CustomersAnalyticsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerSupportComponent.html" data-type="entity-link" >CustomerSupportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CustomerSupportHeaderComponent.html" data-type="entity-link" >CustomerSupportHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DateComponent.html" data-type="entity-link" >DateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteCampaignComponent.html" data-type="entity-link" >DeleteCampaignComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteCustomerComponent.html" data-type="entity-link" >DeleteCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DeleteTicketComponent.html" data-type="entity-link" >DeleteTicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DemoComponent.html" data-type="entity-link" >DemoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeComponent.html" data-type="entity-link" >EmployeeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmployeeTableComponent.html" data-type="entity-link" >EmployeeTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorComponent.html" data-type="entity-link" >ErrorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FilterCustomerComponent.html" data-type="entity-link" >FilterCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FloatingConfiguratorComponent.html" data-type="entity-link" >FloatingConfiguratorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GeneralInfoComponent.html" data-type="entity-link" >GeneralInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GetCampaignByIdComponent.html" data-type="entity-link" >GetCampaignByIdComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeadingComponent.html" data-type="entity-link" >HeadingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LandingComponent.html" data-type="entity-link" >LandingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LayoutComponent.html" data-type="entity-link" >LayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ListCampaignComponent.html" data-type="entity-link" >ListCampaignComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MarketingAnalyticsComponent.html" data-type="entity-link" >MarketingAnalyticsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MarketingAutomationComponent.html" data-type="entity-link" >MarketingAutomationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MarketingmoduleComponent.html" data-type="entity-link" >MarketingmoduleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuComponent.html" data-type="entity-link" >MenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuItemComponent.html" data-type="entity-link" >MenuItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModulesComponent.html" data-type="entity-link" >ModulesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MonthlySalesTrendComponent.html" data-type="entity-link" >MonthlySalesTrendComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link" >NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProfileComponent.html" data-type="entity-link" >ProfileComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReachAnalysisComponent.html" data-type="entity-link" >ReachAnalysisComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterCustomerComponent.html" data-type="entity-link" >RegisterCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SalesAnalyticsComponent.html" data-type="entity-link" >SalesAnalyticsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SalesAutomationComponent.html" data-type="entity-link" >SalesAutomationComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SalesPipelineComponent.html" data-type="entity-link" >SalesPipelineComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchCustomerComponent.html" data-type="entity-link" >SearchCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatsComponent.html" data-type="entity-link" >StatsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SupportAnalyticsComponent.html" data-type="entity-link" >SupportAnalyticsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SupportmoduleComponent.html" data-type="entity-link" >SupportmoduleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsComponent.html" data-type="entity-link" >TabsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsCustomerComponent.html" data-type="entity-link" >TabsCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsMarketingComponent.html" data-type="entity-link" >TabsMarketingComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsSalesComponent.html" data-type="entity-link" >TabsSalesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TabsSupportComponent.html" data-type="entity-link" >TabsSupportComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeComponent.html" data-type="entity-link" >TimeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TopbarComponent.html" data-type="entity-link" >TopbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateCustomerComponent.html" data-type="entity-link" >UpdateCustomerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateEmployeeComponent.html" data-type="entity-link" >UpdateEmployeeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UpdateTicketComponent.html" data-type="entity-link" >UpdateTicketComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ViewTicketsComponent.html" data-type="entity-link" >ViewTicketsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Filter.html" data-type="entity-link" >Filter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonthlySales.html" data-type="entity-link" >MonthlySales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Palette.html" data-type="entity-link" >Palette</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SurfacesType.html" data-type="entity-link" >SurfacesType</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});