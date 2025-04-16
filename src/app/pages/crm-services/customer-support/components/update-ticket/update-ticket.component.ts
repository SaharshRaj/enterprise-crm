import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomerSupportService } from '../../service/customer-support.service';
import { SupportTicket } from '../../../../../models/SupportTicket';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.scss'],
  standalone: false
})
export class UpdateTicketComponent implements OnInit {
  updateTicketForm!: FormGroup;
  submitted = false;
  loading = false;
  statuses = ['Open','Closed'];

  constructor(
    private formBuilder: FormBuilder,
    private supportService: CustomerSupportService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.updateTicketForm = this.formBuilder.group({
      ticketId: ['', [Validators.required, Validators.min(1)]],
      status: ['', [Validators.required]]
    });
  }

  get f() {
    return this.updateTicketForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.updateTicketForm.invalid) {
      return;
    }

    this.loading = true;
    const { ticketId, status } = this.updateTicketForm.value;
    this.supportService.updateTicketStatus(ticketId, status).subscribe({
      next: (ticket: SupportTicket) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Ticket status updated successfully for ID: ${ticket.ticketID}` });
        this.updateTicketForm.reset();
        this.submitted = false;
      },
      error: (error: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
