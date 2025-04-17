// // // import { Component ,OnInit,inject} from '@angular/core';
// // import { isPlatformBrowser } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

// // @Component({
// //   selector: 'app-supportmodule',
// //   standalone: false,
// //   templateUrl: './supportmodule.component.html',
// //   styleUrl: './supportmodule.component.scss'
// // })
// // export class SupportmoduleComponent implements OnInit {
// //   data: any;

// //   options: any;

// //   platformId = inject(PLATFORM_ID);

// //   constructor(private cd: ChangeDetectorRef) {}


// //   ngOnInit() {
// //       this.initChart();
// //   }

// //   initChart() {
// //       if (isPlatformBrowser(this.platformId)) {
// //           const documentStyle = getComputedStyle(document.documentElement);
// //           const textColor = documentStyle.getPropertyValue('--p-text-color');
// //           const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
// //           const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

// //           this.data = {
// //               labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //               datasets: [
// //                   {
// //                       label: 'First Dataset',
// //                       data: [65, 59, 80, 81, 56, 55, 40],
// //                       fill: false,
// //                       borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
// //                       tension: 0.4
// //                   },
// //                   {
// //                       label: 'Second Dataset',
// //                       data: [28, 48, 40, 19, 86, 27, 90],
// //                       fill: false,
// //                       borderColor: documentStyle.getPropertyValue('--p-gray-500'),
// //                       tension: 0.4
// //                   }
// //               ]
// //           };

// //           this.options = {
// //               maintainAspectRatio: false,
// //               aspectRatio: 0.6,
// //               scales: {
// //                   x: {
// //                       ticks: {
// //                           color: textColorSecondary
// //                       },
// //                       grid: {
// //                           color: surfaceBorder,
// //                           drawBorder: false
// //                       }
// //                   },
// //                   y: {
// //                       ticks: {
// //                           color: textColorSecondary
// //                       },
// //                       grid: {
// //                           color: surfaceBorder,
// //                           drawBorder: false
// //                       }
// //                   }
// //               }
// //           };
// //           this.cd.markForCheck()
// //       }
// //   }

// // }


// // import { isPlatformBrowser } from '@angular/common';
// // import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

// // @Component({
// //   selector: 'app-supportmodule',
// //   standalone: false,
// //   templateUrl: './supportmodule.component.html',
// //   styleUrl: './supportmodule.component.scss'
// // })
// // export class SupportmoduleComponent implements OnInit {
// //   data: any;
// //   options: any;
// //   platformId = inject(PLATFORM_ID);
// //   ticketData = [
// //     { "ticketID": 1, "customerID": 1, "issueDescription": "Issue opened", "assignedAgent": 1, "status": "CLOSED" },
// //     { "ticketID": 4, "customerID": 4, "issueDescription": "Order not received", "assignedAgent": 4, "status": "OPEN" },
// //     { "ticketID": 5, "customerID": 1, "issueDescription": "The issue has been opened", "assignedAgent": 1, "status": "OPEN" },
// //     { "ticketID": 7, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
// //     { "ticketID": 8, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
// //     { "ticketID": 9, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
// //     { "ticketID": 10, "customerID": 3, "issueDescription": "The issue has been closed", "assignedAgent": 10, "status": "CLOSED" },
// //     { "ticketID": 12, "customerID": 12, "issueDescription": "The ticket has been closed", "assignedAgent": 12, "status": "CLOSED" },
// //     { "ticketID": 13, "customerID": 2, "issueDescription": "The ticket has been opened", "assignedAgent": 2, "status": "OPEN" },
// //     { "ticketID": 15, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 16, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 17, "customerID": 0, "issueDescription": "string", "assignedAgent": 0, "status": "OPEN" },
// //     { "ticketID": 21, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 23, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 24, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 25, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
// //     { "ticketID": 26, "customerID": 3, "issueDescription": "This service is not adsisapdnias", "assignedAgent": null, "status": "OPEN" }
// //   ];

// //   constructor(private cd: ChangeDetectorRef) {}

// //   ngOnInit() {
// //     this.initChart();
// //   }

// //   initChart() {
// //     if (isPlatformBrowser(this.platformId)) {
// //       const documentStyle = getComputedStyle(document.documentElement);
// //       const textColor = documentStyle.getPropertyValue('--p-text-color');
// //       const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
// //       const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

// //       // 1. Process the ticket data to count tickets per customer
// //       const customerTicketCounts: { [key: string]: number } = {};
// //       this.ticketData.forEach(ticket => {
// //         const customerIdString = String(ticket.customerID);
// //         customerTicketCounts[customerIdString] = (customerTicketCounts[customerIdString] || 0) + 1;
// //       });

// //       const customerIDs: string[] = Object.keys(customerTicketCounts);
// //       const ticketCounts: number[] = Object.values(customerTicketCounts);

// //       // 2. Structure the 'data' object for the bar chart
// //       this.data = {
// //         labels: customerIDs,
// //         datasets: [
// //           {
// //             label: 'Number of Tickets',
// //             backgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
// //             borderColor: documentStyle.getPropertyValue('--p-blue-500'),
// //             data: ticketCounts
// //           }
// //         ]
// //       };

// //       // 3. Configure the 'options' for the bar chart
// //       this.options = {
// //         maintainAspectRatio: false,
// //         aspectRatio: 0.6,
// //         scales: {
// //           x: {
// //             title: {
// //               display: true,
// //               text: 'Customer ID',
// //               color: textColorSecondary
// //             },
// //             ticks: {
// //               color: textColorSecondary
// //             },
// //             grid: {
// //               color: surfaceBorder,
// //               drawBorder: false
// //             }
// //           },
// //           y: {
// //             title: {
// //               display: true,
// //               text: 'Number of Tickets',
// //               color: textColorSecondary
// //             },
// //             ticks: {
// //               color: textColorSecondary,
// //               beginAtZero: true,
// //               precision: 0
// //             },
// //             grid: {
// //               color: surfaceBorder,
// //               drawBorder: false
// //             }
// //           }
// //         },
// //         plugins: {
// //           legend: {
// //             labels: {
// //               color: textColor
// //             }
// //           }
// //         }
// //       };
// //       this.cd.markForCheck();
// //     }
// //   }
// // }

// import { isPlatformBrowser } from '@angular/common';
// import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

// @Component({
//   selector: 'app-supportmodule',
//   standalone: false,
//   templateUrl: './supportmodule.component.html',
//   styleUrl: './supportmodule.component.scss'
// })
// export class SupportmoduleComponent implements OnInit {
//   data: any;
//   options: any;
//   platformId = inject(PLATFORM_ID);
//   ticketData = [
//     { "ticketID": 1, "customerID": 1, "issueDescription": "Issue opened", "assignedAgent": 1, "status": "CLOSED" },
//     { "ticketID": 4, "customerID": 4, "issueDescription": "Order not received", "assignedAgent": 4, "status": "OPEN" },
//     { "ticketID": 5, "customerID": 1, "issueDescription": "The issue has been opened", "assignedAgent": 1, "status": "OPEN" },
//     { "ticketID": 7, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
//     { "ticketID": 8, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
//     { "ticketID": 9, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
//     { "ticketID": 10, "customerID": 3, "issueDescription": "The issue has been closed", "assignedAgent": 10, "status": "CLOSED" },
//     { "ticketID": 12, "customerID": 12, "issueDescription": "The ticket has been closed", "assignedAgent": 12, "status": "CLOSED" },
//     { "ticketID": 13, "customerID": 2, "issueDescription": "The ticket has been opened", "assignedAgent": 2, "status": "OPEN" },
//     { "ticketID": 15, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 16, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 17, "customerID": 0, "issueDescription": "string", "assignedAgent": 0, "status": "OPEN" },
//     { "ticketID": 21, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 23, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 24, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 25, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
//     { "ticketID": 26, "customerID": 3, "issueDescription": "This service is not adsisapdnias", "assignedAgent": null, "status": "OPEN" }
//   ];

//   constructor(private cd: ChangeDetectorRef) {}

//   ngOnInit() {
//     this.initChart();
//   }

//   initChart() {
//     if (isPlatformBrowser(this.platformId)) {
//       const documentStyle = getComputedStyle(document.documentElement);
//       const textColor = documentStyle.getPropertyValue('--p-text-color');
//       const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
//       const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
//       const blueColor = documentStyle.getPropertyValue('--p-blue-500');
//       const greenColor = documentStyle.getPropertyValue('--p-green-500');

//       // Process the ticket data to count open and closed tickets per customer
//       const customerTicketCounts: { [key: string]: { open: number; closed: number } } = {};
//       this.ticketData.forEach(ticket => {
//         const customerIdString = String(ticket.customerID);
//         if (!customerTicketCounts[customerIdString]) {
//           customerTicketCounts[customerIdString] = { open: 0, closed: 0 };
//         }
//         if (ticket.status === 'OPEN') {
//           customerTicketCounts[customerIdString].open++;
//         } else if (ticket.status === 'CLOSED') {
//           customerTicketCounts[customerIdString].closed++;
//         }
//       });

//       const customerIDs = Object.keys(customerTicketCounts);
//       const openTicketCounts = customerIDs.map(id => customerTicketCounts[id].open);
//       const closedTicketCounts = customerIDs.map(id => customerTicketCounts[id].closed);

//       this.data = {
//         labels: customerIDs,
//         datasets: [
//           {
//             label: 'Open Tickets',
//             backgroundColor: greenColor,
//             borderColor: greenColor,
//             data: openTicketCounts
//           },
//           {
//             label: 'Closed Tickets',
//             backgroundColor: blueColor,
//             borderColor: blueColor,
//             data: closedTicketCounts
//           }
//         ]
//       };

//       this.options = {
//         maintainAspectRatio: false,
//         aspectRatio: 0.6,
//         scales: {
//           x: {
//             stacked: true, // Stack the bars for open and closed tickets
//             title: {
//               display: true,
//               text: 'Customer ID',
//               color: textColorSecondary
//             },
//             ticks: {
//               color: textColorSecondary
//             },
//             grid: {
//               color: surfaceBorder,
//               drawBorder: false
//             }
//           },
//           y: {
//             stacked: true, // Stack the bars for open and closed tickets
//             title: {
//               display: true,
//               text: 'Number of Tickets',
//               color: textColorSecondary
//             },
//             ticks: {
//               color: textColorSecondary,
//               beginAtZero: true,
//               precision: 0
//             },
//             grid: {
//               color: surfaceBorder,
//               drawBorder: false
//             }
//           }
//         },
//         plugins: {
//           legend: {
//             labels: {
//               color: textColor
//             }
//           }
//         }
//       };
//       this.cd.markForCheck();
//     }
//   }
// }

import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-supportmodule',
  standalone: false,
  templateUrl: './supportmodule.component.html',
  styleUrl: './supportmodule.component.scss'
})
export class SupportmoduleComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);
  ticketData = [
    { "ticketID": 1, "customerID": 1, "issueDescription": "Issue opened", "assignedAgent": 1, "status": "CLOSED" },
    { "ticketID": 4, "customerID": 4, "issueDescription": "Order not received", "assignedAgent": 4, "status": "OPEN" },
    { "ticketID": 5, "customerID": 1, "issueDescription": "The issue has been opened", "assignedAgent": 1, "status": "OPEN" },
    { "ticketID": 7, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
    { "ticketID": 8, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
    { "ticketID": 9, "customerID": 2, "issueDescription": "The issue has been opened", "assignedAgent": 2, "status": "OPEN" },
    { "ticketID": 10, "customerID": 3, "issueDescription": "The issue has been closed", "assignedAgent": 10, "status": "CLOSED" },
    { "ticketID": 12, "customerID": 12, "issueDescription": "The ticket has been closed", "assignedAgent": 12, "status": "CLOSED" },
    { "ticketID": 13, "customerID": 2, "issueDescription": "The ticket has been opened", "assignedAgent": 2, "status": "OPEN" },
    { "ticketID": 15, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 16, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 17, "customerID": 0, "issueDescription": "string", "assignedAgent": 0, "status": "OPEN" },
    { "ticketID": 21, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 23, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 24, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 25, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 26, "customerID": 3, "issueDescription": "This service is not adsisapdnias", "assignedAgent": null, "status": "OPEN" }
  ];

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
      const blueColor = documentStyle.getPropertyValue('--p-blue-500');
      const greenColor = documentStyle.getPropertyValue('--p-green-500');
      const grayColor = documentStyle.getPropertyValue('--p-gray-500'); // Color for other statuses

      // Process the ticket data to count tickets by status per customer
      const customerTicketCounts: { [key: string]: { open: number; closed: number; other: number } } = {};
      this.ticketData.forEach(ticket => {
        const customerIdString = String(ticket.customerID);
        if (!customerTicketCounts[customerIdString]) {
          customerTicketCounts[customerIdString] = { open: 0, closed: 0, other: 0 };
        }
        if (ticket.status === 'OPEN') {
          customerTicketCounts[customerIdString].open++;
        } else if (ticket.status === 'CLOSED') {
          customerTicketCounts[customerIdString].closed++;
        } else {
          customerTicketCounts[customerIdString].other++;
        }
      });

      const customerIDs = Object.keys(customerTicketCounts);
      const openTicketCounts = customerIDs.map(id => customerTicketCounts[id].open);
      const closedTicketCounts = customerIDs.map(id => customerTicketCounts[id].closed);
      const otherTicketCounts = customerIDs.map(id => customerTicketCounts[id].other);

      this.data = {
        labels: customerIDs,
        datasets: [
          {
            label: 'Open Tickets',
            backgroundColor: greenColor,
            borderColor: greenColor,
            data: openTicketCounts
          },
          {
            label: 'Closed Tickets',
            backgroundColor: blueColor,
            borderColor: blueColor,
            data: closedTicketCounts
          },
          {
            label: 'Other Status',
            backgroundColor: grayColor,
            borderColor: grayColor,
            data: otherTicketCounts
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        scales: {
          x: {
            stacked: true, // Stack the bars for different statuses
            title: {
              display: true,
              text: 'Customer ID',
              color: textColorSecondary
            },
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            stacked: true, // Stack the bars for different statuses
            title: {
              display: true,
              text: 'Number of Tickets',
              color: textColorSecondary
            },
            ticks: {
              color: textColorSecondary,
              beginAtZero: true,
              precision: 0
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };
      this.cd.markForCheck();
    }
  }
}