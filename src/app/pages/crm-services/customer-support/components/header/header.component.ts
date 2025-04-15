// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: false,
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {

// }

import { Component, Input, OnInit } from '@angular/core';
import { SupportTicket } from '../../../../../models/SupportTicket';
import { Observable } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerSupportService } from './../../service/customer-support.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) allTickets$!: Observable<SupportTicket[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly customerSupportService: CustomerSupportService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.newTicketForm = this.fb.group({
      customerId: ['', [Validators.required, Validators.min(1)]],
      issueDescription: ['', [Validators.required, Validators.minLength(10)]],
      assignedAgent: ['', [Validators.required]],
    });

    this.notificationCronForm = this.fb.group({
      time: [null, [Validators.required]],
    });

    this.closingCronForm = this.fb.group({
      time: [null, [Validators.required]],
    });

    this.items = [
      {
        icon: 'pi pi-calendar',
        label: 'Schedule Ticket Closing Time',
        command: () => {
          this.showDialog1();
        },
      },
      {
        icon: 'pi pi-clock',
        label: 'Schedule Notification Time',
        command: () => {
          this.showDialog2();
        },
      },
      {
        icon: 'pi pi-plus',
        label: 'Create New Ticket',
        command: () => {
          this.showDialog3();
        },
      },
    ];

    this.allTickets$.subscribe((tickets) => {
      this.activeTickets = tickets.filter(ticket => ticket.status === 'Open').length;
      this.resolvedTickets = tickets.filter(ticket => ticket.status === 'Closed').length;
      this.pendingTickets = tickets.filter(ticket => ticket.status === 'Pending').length;
    });
  }

  activeTickets!: number;
  resolvedTickets!: number;
  pendingTickets!: number;
  items!: MenuItem[];
  newTicketForm!: FormGroup;
  notificationCronForm!: FormGroup;
  closingCronForm!: FormGroup;

  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;

  isLoading = false;

  timeToDailyCron(timeString: string) {
    const date = new Date(timeString);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `* ${minutes} ${hours} * * * `;
  }

  showDialog1() {
    this.visible1 = true;
  }

  showDialog2() {
    this.visible2 = true;
  }

  showDialog3() {
    this.visible3 = true;
  }

  showToast(toast: { severity: string, summary: string, message: string }) {
    this.messageService.add({ severity: toast.severity, summary: toast.summary, detail: toast.message });
  }

  handleTicketSumbit() {
    this.isLoading = true;
    this.customerSupportService.create({
      customerID: this.newTicketForm.get('customerId')?.value,
      issueDescription: this.newTicketForm.get('issueDescription')?.value,
      assignedAgent: this.newTicketForm.get('assignedAgent')?.value,
      status: 'Open',
    }).subscribe({
      next: (ticket: SupportTicket) => {
        this.showToast({ severity: 'success', summary: 'Saved', message: `Ticket created successfully with id: ${ticket.ticketID}` });
      },
      error: (error: HttpErrorResponse) => {
        this.showToast({ severity: 'error', summary: 'Error', message: error.error.message });
        this.isLoading = false;
        this.newTicketForm.reset();
      },
      complete: () => {
        this.isLoading = false;
        this.visible3 = false;
        this.newTicketForm.reset();
      },
    });
  }

  handleNotificationSumbit() {
    this.isLoading = true;
    const timeString = this.notificationCronForm.get('time')?.value;
    const cron = this.timeToDailyCron(timeString);
    this.customerSupportService.updateNotificationSchedule(cron).subscribe({
      next: (res: { id: string; taskName: string; cronExpression: string }) =>
        this.showToast({ severity: 'success', summary: 'Success', message: `Updated schedule for ${res.taskName}` }),
      error: (error: HttpErrorResponse) => {
        this.showToast({ severity: 'error', summary: 'Error', message: error.error.message });
        this.notificationCronForm.reset();
      },
      complete: () => {
        this.isLoading = false;
        this.visible2 = false;
        this.notificationCronForm.reset();
      },
    });
  }

  handleClosingSumbit() {
    this.isLoading = true;
    const timeString = this.closingCronForm.get('time')?.value;
    const cron = this.timeToDailyCron(timeString);
    this.customerSupportService.updateClosingSchedule(cron).subscribe({
      next: (res: { id: string; taskName: string; cronExpression: string }) =>
        this.showToast({ severity: 'success', summary: 'Success', message: `Updated schedule for ${res.taskName}` }),
      error: (error: HttpErrorResponse) => {
        this.showToast({ severity: 'error', summary: 'Error', message: error.error.message });
        this.closingCronForm.reset();
      },
      complete: () => {
        this.isLoading = false;
        this.visible1 = false;
        this.closingCronForm.reset();
      },
    });
  }

  get customerIdErrorMessage(): string {
    const control = this.newTicketForm.get('customerId');
    if (control?.hasError('required')) {
      return 'Customer ID is required.';
    }
    if (control?.hasError('min')) {
      return 'Customer ID must be valid';
    }
    return '';
  }

  get issueDescriptionErrorMessage(): string {
    const control = this.newTicketForm.get('issueDescription');
    if (control?.hasError('required')) {
      return 'Issue description is required.';
    }
    if (control?.hasError('minLength')) {
      return 'Issue description must be at least 10 characters long.';
    }
    return '';
  }

  get assignedAgentErrorMessage(): string {
    const control = this.newTicketForm.get('assignedAgent');
    if (control?.hasError('required')) {
      return 'Assigned agent is required.';
    }
    return '';
  }

  get notificationTimeErrorMessage(): string {
    const control = this.notificationCronForm.get('time');
    if (control?.hasError('required')) {
      return 'Notification time is required.';
    }
    return '';
  }

  get closingTimeErrorMessage(): string {
    const control = this.closingCronForm.get('time');
    if (control?.hasError('required')) {
      return 'Closing time is required.';
    }
    return '';
  }
}

