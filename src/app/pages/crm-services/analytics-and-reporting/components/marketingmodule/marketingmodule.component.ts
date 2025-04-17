import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

interface Campaign {
  campaignID: number;
  name: string;
  startDate: string;
  endDate: string;
  type: string;
  customerInteractions: number;
  trackingUrl: string;
  endDateAfterStartDate: boolean;
}

@Component({
  selector: 'app-marketingmodule',
  standalone: false,
  templateUrl: './marketingmodule.component.html',
  styleUrl: './marketingmodule.component.scss'
})
export class MarketingmoduleComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  private cd = inject(ChangeDetectorRef);
  latestCampaigns: Campaign[] = [];
  campaignData: Campaign[] = [
    {
      "campaignID": 8,
      "name": "wsxwed",
      "startDate": "2025-04-16",
      "endDate": "2025-04-23",
      "type": "EMAIL",
      "customerInteractions": 3,
      "trackingUrl": "http://localhost:3004/api/marketing/8/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 10,
      "name": "Hello People",
      "startDate": "2025-04-27",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 10,
      "trackingUrl": "http://localhost:3004/api/marketing/10/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 11,
      "name": "Lux",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 12,
      "trackingUrl": "http://localhost:3004/api/marketing/11/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 13,
      "name": "cvbndvc",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 5,
      "trackingUrl": "http://localhost:3004/api/marketing/13/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 14,
      "name": "cvsbndvc",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 3,
      "trackingUrl": "http://localhost:3004/api/marketing/14/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 15,
      "name": "tgvcfgh",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 22,
      "trackingUrl": "http://localhost:3004/api/marketing/15/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 17,
      "name": "bnmnb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/17/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 19,
      "name": "cvbnm",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/19/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 20,
      "name": "welcomesale",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/20/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 22,
      "name": "lwofndk",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/22/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 23,
      "name": "bjhknk",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/23/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 25,
      "name": "nlkgfhgxc",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/25/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 26,
      "name": "sfsafaca",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/26/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 27,
      "name": "letsgoo",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 1,
      "trackingUrl": "http://localhost:3004/api/marketing/27/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 28,
      "name": "letsgoo1",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/28/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 29,
      "name": "letsgor",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/29/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 30,
      "name": "letsgosr",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/30/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 31,
      "name": "letsssgosr",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/31/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 32,
      "name": "ghcvbn",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/32/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 33,
      "name": "xcvbn",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/33/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 34,
      "name": "nbjnxc",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/34/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 35,
      "name": "wertyui",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 1,
      "trackingUrl": "http://localhost:3004/api/marketing/35/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 36,
      "name": "zxcvb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/36/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 38,
      "name": "wsxcvb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/38/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 39,
      "name": "wsdxcvb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/39/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 40,
      "name": "edcvb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/40/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 41,
      "name": "rfcvb",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 0,
      "trackingUrl": "http://localhost:3004/api/marketing/41/track",
      "endDateAfterStartDate": true
    },
    {
      "campaignID": 42,
      "name": "edcvbnm",
      "startDate": "2025-04-21",
      "endDate": "2025-04-29",
      "type": "EMAIL",
      "customerInteractions": 1,
      "trackingUrl": "http://localhost:3004/api/marketing/42/track",
      "endDateAfterStartDate": true
    },
  ];

  constructor() {}

  ngOnInit() {
    this.loadLatestCampaigns(this.campaignData);
    this.initChart();
  }

  loadLatestCampaigns(campaigns: Campaign[]) {
    // Sort campaigns by startDate in descending order (latest first)
    const sortedCampaigns = [...campaigns].sort(
      (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );

    const numberOfLatestCampaigns = 5; // Display the top 5 latest campaigns
    this.latestCampaigns = sortedCampaigns.slice(0, numberOfLatestCampaigns);
  }

  initChart() {
    if (isPlatformBrowser(this.platformId) && this.latestCampaigns.length > 0) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: this.latestCampaigns.map((campaign) => campaign.name),
        datasets: [
          {
            label: 'Customer Interactions',
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: this.latestCampaigns.map((campaign) => campaign.customerInteractions),
          },
        ],
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Customer Interactions',
              color: textColorSecondary,
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            title: {
              display: true,
              text: 'Campaign',
              color: textColorSecondary,
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };
      this.cd.markForCheck();
    } else {
      this.data = {
        labels: [],
        datasets: [],
      };
    }
  }
}