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
    { "ticketID": 17, "customerID": 0, "issueDescription": "string", "assignedAgent": 1, "status": "OPEN" },
    { "ticketID": 21, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 23, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 24, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 25, "customerID": 3, "issueDescription": "Issue closed", "assignedAgent": 3, "status": "CLOSED" },
    { "ticketID": 26, "customerID": 3, "issueDescription": "This service is not adsisapdnias", "assignedAgent": 12, "status": "OPEN" }
  ];

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
      const greenColor = documentStyle.getPropertyValue('--p-green-500');
      const yellowColor = documentStyle.getPropertyValue('--p-yellow-500');

      // Process the ticket data to count tickets by status per customer
      const agentTicketCounts: { [key: string]: { open: number; closed: number; other: number } } = {};
      this.ticketData.forEach(ticket => {
        const agentIdString = String(ticket.assignedAgent);
        if (!agentTicketCounts[agentIdString]) {
          agentTicketCounts[agentIdString] = { open: 0, closed: 0, other: 0 };
        }
        if (ticket.status === 'OPEN') {
          agentTicketCounts[agentIdString].open++;
        } else if (ticket.status === 'CLOSED') {
          agentTicketCounts[agentIdString].closed++;
        } else {
          agentTicketCounts[agentIdString].other++;
        }
      });

      const agentIDs = Object.keys(agentTicketCounts);
      const openTicketCounts = agentIDs.map(id => agentTicketCounts[id].open);
      const closedTicketCounts = agentIDs.map(id => agentTicketCounts[id].closed);

      this.data = {
        labels: agentIDs,
        datasets: [
          {
            label: 'Open Tickets',
            backgroundColor: yellowColor,
            borderColor: yellowColor,
            data: openTicketCounts
          },
          {
            label: 'Closed Tickets',
            backgroundColor: greenColor,
            borderColor: greenColor,
            data: closedTicketCounts
          },
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
              text: 'Agent ID',
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