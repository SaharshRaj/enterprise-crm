import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customermodule',
  standalone: false,
  templateUrl: './customermodule.component.html',
  styleUrl: './customermodule.component.scss'
})
export class CustomermoduleComponent implements OnInit {
  regionData: any[] = [];

  // Your raw data
  customersData = [
    { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', phone: '555-123-4567', segmentationData: { Region: 'NORTH_AMERICA', Interest: 'SPORTS', 'Purchasing Habits': 'NEW' } },
    { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-234-5678', segmentationData: { Region: 'EUROPE', Interest: 'TECH', 'Purchasing Habits': 'FREQUENT' } },
    { id: 3, name: 'Carol White', email: 'carol.white@example.com', phone: '555-345-6789', segmentationData: { Region: 'ASIAN_PACIFIC', Interest: 'FASHION', 'Purchasing Habits': 'REGULAR' } },
    { id: 4, name: 'David Brown', email: 'david.brown@example.com', phone: '555-456-7890', segmentationData: { Region: 'LATIN_AMERICA', Interest: 'MUSIC', 'Purchasing Habits': 'SPARSE' } },
    { id: 5, name: 'Eve Davis', email: 'eve.davis@example.com', phone: '555-567-8901', segmentationData: { Region: 'MIDDLE_EAST_AND_AFRICA', Interest: 'FOOD_AND_DRINK', 'Purchasing Habits': 'NEW' } },
    { id: 6, name: 'Frank Miller', email: 'frank.miller@example.com', phone: '555-678-9012', segmentationData: { Region: 'CENTRAL_AMERICA', Interest: 'HEALTH_AND_WELLNESS', 'Purchasing Habits': 'FREQUENT' } },
    { id: 7, name: 'Grace Wilson', email: 'grace.wilson@example.com', phone: '555-789-0123', segmentationData: { Region: 'EASTERN_EUROPE', Interest: 'GAMING', 'Purchasing Habits': 'REGULAR' } },
    { id: 8, name: 'Hank Moore', email: 'hank.moore@example.com', phone: '555-890-1234', segmentationData: { Region: 'WESTERN_EUROPE', Interest: 'AUTOMOTIVE', 'Purchasing Habits': 'SPARSE' } },
    { id: 9, name: 'Ivy Taylor', email: 'ivy.taylor@example.com', phone: '555-901-2345', segmentationData: { Region: 'NORTHERN_EUROPE', Interest: 'PETS', 'Purchasing Habits': 'NEW' } },
    { id: 10, name: 'Jack Anderson', email: 'jack.anderson@example.com', phone: '555-012-3456', segmentationData: { Region: 'SOUTHERN_EUROPE', Interest: 'GARDENING', 'Purchasing Habits': 'FREQUENT' } },
    { id: 11, name: 'Kara Thomas', email: 'kara.thomas@example.com', phone: '555-123-4567', segmentationData: { Region: 'SOUTHEAST_ASIA', Interest: 'FINANCE', 'Purchasing Habits': 'REGULAR' } },
    { id: 12, name: 'Leo Jackson', email: 'leo.jackson@example.com', phone: '555-234-5678', segmentationData: { Region: 'SOUTH_ASIA', Interest: 'BEAUTY_AND_COSMETICS', 'Purchasing Habits': 'SPARSE' } },
    { id: 13, name: 'Mia Harris', email: 'mia.harris@example.com', phone: '555-345-6789', segmentationData: { Region: 'EAST_ASIA', Interest: 'BOOKS_AND_LITERATURE', 'Purchasing Habits': 'NEW' } },
    { id: 14, name: 'Noah Martin', email: 'noah.martin@example.com', phone: '555-456-7890', segmentationData: { Region: 'OCEANIA', Interest: 'MOVIES_AND_TV', 'Purchasing Habits': 'FREQUENT' } },
    { id: 15, name: 'Olivia Lee', email: 'olivia.lee@example.com', phone: '555-567-8901', segmentationData: { Region: 'SUB_SAHARAN_AFRICA', Interest: 'PHOTOGRAPHY', 'Purchasing Habits': 'REGULAR' } },
    { id: 16, name: 'Paul Walker', email: 'paul.walker@example.com', phone: '555-678-9012', segmentationData: { Region: 'NORTH_AMERICA', Interest: 'DIY_AND_HOME_IMPROVEMENT', 'Purchasing Habits': 'SPARSE' } },
    { id: 17, name: 'Quinn Young', email: 'quinn.young@example.com', phone: '555-789-0123', segmentationData: { Region: 'EUROPE', Interest: 'OUTDOOR_ACTIVITIES', 'Purchasing Habits': 'NEW' } },
    { id: 18, name: 'Rachel King', email: 'rachel.king@example.com', phone: '555-890-1234', segmentationData: { Region: 'ASIAN_PACIFIC', Interest: 'SOCIAL_MEDIA', 'Purchasing Habits': 'FREQUENT' } },
    { id: 19, name: 'Sam Carter', email: 'sam.carter@example.com', phone: '555-901-2345', segmentationData: { Region: 'LATIN_AMERICA', Interest: 'FITNESS', 'Purchasing Habits': 'REGULAR' } },
    { id: 20, name: 'Tina Adams', email: 'tina.adams@example.com', phone: '555-012-3456', segmentationData: { Region: 'MIDDLE_EAST_AND_AFRICA', Interest: 'ENVIRONMENT', 'Purchasing Habits': 'SPARSE' } }
  ];

  data: any;

    options: any;

  
    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.initChart();
    }

    initChart() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
            const customerByRegion = new Map<string,number>();
            this.customersData.forEach((customer) => {
              const region = customer.segmentationData.Region;
              customerByRegion.set(region, (customerByRegion.get(region) || 0) + 1);
            });
            const regions = [...(new Set([...(this.customersData.map((customer) =>  customer.segmentationData.Region))]))]
            const finalValues: number[] = []
            regions.forEach((region) => finalValues.push(customerByRegion.get(region)!))

            this.data = {
                labels: regions,
                datasets: [
                    {
                        label: 'Customers by Region',
                        backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        data: finalValues
                    },
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            this.cd.markForCheck()
        
    }
}