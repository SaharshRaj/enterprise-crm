import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CustomerProfile } from '../../../../../models/CustomerProfile';
import { CustomersService } from '../../../customer-data-management/service/customers.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-tabs-support',
  standalone: false,
  templateUrl: './tabs-support.component.html',
  styleUrl: './tabs-support.component.scss'
})
export class TabsSupportComponent {
  allCustomers: Observable<CustomerProfile[]> = of([
    {
      customerID: 1,
      name: 'Alice Smith',
      emailId: 'alice.smith@example.com',
      phoneNumeber: '555-123-4567',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'NORTH_AMERICA',
        Interest: 'SPORTS',
        'Purchasing Habits': 'NEW',
      },
    },
    {
      customerID: 2,
      name: 'Bob Johnson',
      emailId: 'bob.johnson@example.com',
      phoneNumeber: '555-234-5678',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'EUROPE',
        Interest: 'TECH',
        'Purchasing Habits': 'FREQUENT',
      },
    },
    {
      customerID: 3,
      name: 'Carol White',
      emailId: 'carol.white@example.com',
      phoneNumeber: '555-345-6789',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'ASIAN_PACIFIC',
        Interest: 'FASHION',
        'Purchasing Habits': 'REGULAR',
      },
    },
    {
      customerID: 4,
      name: 'David Brown',
      emailId: 'david.brown@example.com',
      phoneNumeber: '555-456-7890',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'LATIN_AMERICA',
        Interest: 'MUSIC',
        'Purchasing Habits': 'SPARSE',
      },
    },
    {
      customerID: 5,
      name: 'Eve Davis',
      emailId: 'eve.davis@example.com',
      phoneNumeber: '555-567-8901',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'MIDDLE_EAST_AND_AFRICA',
        Interest: 'FOOD_AND_DRINK',
        'Purchasing Habits': 'NEW',
      },
    },
    {
      customerID: 6,
      name: 'Frank Miller',
      emailId: 'frank.miller@example.com',
      phoneNumeber: '555-678-9012',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'CENTRAL_AMERICA',
        Interest: 'HEALTH_AND_WELLNESS',
        'Purchasing Habits': 'FREQUENT',
      },
    },
    {
      customerID: 7,
      name: 'Grace Wilson',
      emailId: 'grace.wilson@example.com',
      phoneNumeber: '555-789-0123',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'EASTERN_EUROPE',
        Interest: 'GAMING',
        'Purchasing Habits': 'REGULAR',
      },
    },
    {
      customerID: 8,
      name: 'Hank Moore',
      emailId: 'hank.moore@example.com',
      phoneNumeber: '555-890-1234',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'WESTERN_EUROPE',
        Interest: 'AUTOMOTIVE',
        'Purchasing Habits': 'SPARSE',
      },
    },
    {
      customerID: 9,
      name: 'Ivy Taylor',
      emailId: 'ivy.taylor@example.com',
      phoneNumeber: '555-901-2345',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'NORTHERN_EUROPE',
        Interest: 'PETS',
        'Purchasing Habits': 'NEW',
      },
    },
    {
      customerID: 10,
      name: 'Jack Anderson',
      emailId: 'jack.anderson@example.com',
      phoneNumeber: '555-012-3456',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'SOUTHERN_EUROPE',
        Interest: 'GARDENING',
        'Purchasing Habits': 'FREQUENT',
      },
    },
    {
      customerID: 11,
      name: 'Kara Thomas',
      emailId: 'kara.thomas@example.com',
      phoneNumeber: '555-123-4567',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'SOUTHEAST_ASIA',
        Interest: 'FINANCE',
        'Purchasing Habits': 'REGULAR',
      },
    },
    {
      customerID: 12,
      name: 'Leo Jackson',
      emailId: 'leo.jackson@example.com',
      phoneNumeber: '555-234-5678',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'SOUTH_ASIA',
        Interest: 'BEAUTY_AND_COSMETICS',
        'Purchasing Habits': 'SPARSE',
      },
    },
    {
      customerID: 13,
      name: 'Mia Harris',
      emailId: 'mia.harris@example.com',
      phoneNumeber: '555-345-6789',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'EAST_ASIA',
        Interest: 'BOOKS_AND_LITERATURE',
        'Purchasing Habits': 'NEW',
      },
    },
    {
      customerID: 14,
      name: 'Noah Martin',
      emailId: 'noah.martin@example.com',
      phoneNumeber: '555-456-7890',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'OCEANIA',
        Interest: 'MOVIES_AND_TV',
        'Purchasing Habits': 'FREQUENT',
      },
    },
    {
      customerID: 15,
      name: 'Olivia Lee',
      emailId: 'olivia.lee@example.com',
      phoneNumeber: '555-567-8901',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'SUB_SAHARAN_AFRICA',
        Interest: 'PHOTOGRAPHY',
        'Purchasing Habits': 'REGULAR',
      },
    },
    {
      customerID: 16,
      name: 'Paul Walker',
      emailId: 'paul.walker@example.com',
      phoneNumeber: '555-678-9012',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'NORTH_AMERICA',
        Interest: 'DIY_AND_HOME_IMPROVEMENT',
        'Purchasing Habits': 'SPARSE',
      },
    },
    {
      customerID: 17,
      name: 'Quinn Young',
      emailId: 'quinn.young@example.com',
      phoneNumeber: '555-789-0123',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'EUROPE',
        Interest: 'OUTDOOR_ACTIVITIES',
        'Purchasing Habits': 'NEW',
      },
    },
    {
      customerID: 18,
      name: 'Rachel King',
      emailId: 'rachel.king@example.com',
      phoneNumeber: '555-890-1234',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'ASIAN_PACIFIC',
        Interest: 'SOCIAL_MEDIA',
        'Purchasing Habits': 'FREQUENT',
      },
    },
    {
      customerID: 19,
      name: 'Sam Carter',
      emailId: 'sam.carter@example.com',
      phoneNumeber: '555-901-2345',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'LATIN_AMERICA',
        Interest: 'FITNESS',
        'Purchasing Habits': 'REGULAR',
      },
    },
    {
      customerID: 20,
      name: 'Tina Adams',
      emailId: 'tina.adams@example.com',
      phoneNumeber: '555-012-3456',
      purchaseHistory: ['12313', '1231131', '1231231'],
      segmentationData: {
        Region: 'MIDDLE_EAST_AND_AFRICA',
        Interest: 'ENVIRONMENT',
        'Purchasing Habits': 'SPARSE',
      },
    },
  ]);

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private readonly salesService: CustomersService,
  ) {}

  activeCustomers!: number;
  totalCustomers!: number;
  topRegion!: string;
  trendingInterest!: string;
  customerCountInterest!: number;
  customerCountRegion!: number;

  statistics: {
    title: string;
    count: string;
    iconBg: string;
    iconClass: string;
    closingLine: string;
    closingBg: string;
    footer: string;
  }[] = [];

  isSameDay(closingDate: Date, today: Date) {
    return (
      closingDate.getFullYear() === today.getFullYear() &&
      closingDate.getMonth() === today.getMonth() &&
      closingDate.getDate() === today.getDate()
    );
  }

  ngOnInit(): void {
    this.allCustomers.subscribe((customers) => {
      this.totalCustomers = customers.length;
      this.activeCustomers = customers.filter(
        (customer) => customer.purchaseHistory.length > 3,
      ).length;
      const regionCount: Record<string, number> = customers.reduce(
        (acc: Record<string, number>, customer) => {
          const region = customer.segmentationData.Region;
          acc[region] = (acc[region] ?? 0) + 1;
          return acc;
        },
        {},
      );

      const interestCount: Record<string, number> = customers.reduce(
        (acc: Record<string, number>, customer) => {
          const interest = customer.segmentationData.Interest;
          acc[interest] = (acc[interest] ?? 0) + 1;
          return acc;
        },
        {},
      );

      this.topRegion = Object.keys(regionCount).reduce((top, region) => {
        if (!top || regionCount[region] > regionCount[top]) {
          this.customerCountRegion = regionCount[region];
          return region;
        }
        return top;
      }, '');

      this.trendingInterest = Object.keys(interestCount).reduce((top, interest) => {
        if (!top || interestCount[interest] > interestCount[interest]) {
          this.customerCountInterest = interestCount[interest];
          return interest;
        }
        return top;
      }, '');

      
      this.statistics = [
        {
          title: 'Active Customers',
          count: this.activeCustomers.toString(),
          iconBg: 'bg-blue-100',
          iconClass: 'pi pi-users text-blue-500',
          closingLine: `${this.totalCustomers}`,
          closingBg: 'text-green-500',
          footer: 'Total customers:',
        },
        {
          title: 'Top Region',
          count: this.topRegion,
          iconBg: 'bg-green-100',
          iconClass: 'pi pi-indian-rupee text-green-500',
          closingLine: `${this.customerCountRegion}`,
          closingBg: 'text-green-500',
          footer: 'Customer count:',
        },
        {
          title: 'Trending Interest',
          count: this.trendingInterest,
          iconBg: 'bg-purple-100',
          iconClass: 'pi pi-trophy text-purple-500',
          closingLine: `${this.customerCountInterest}`,
          closingBg: 'text-green-500',
          footer: 'Customer count:',
        },
      ];
    });
  }


}
