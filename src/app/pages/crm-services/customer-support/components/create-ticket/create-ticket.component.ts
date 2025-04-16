import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerSupportService } from './../../service/customer-support.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
  standalone: false
})
export class CreateTicketComponent implements OnInit {
  createTicketForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private supportService: CustomerSupportService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.createTicketForm = this.formBuilder.group({
      customerId: ['', [Validators.required, Validators.min(1)]],
      issueDescription: ['', [Validators.required, Validators.minLength(10)]],
      assignedAgent: ['', [Validators.required]]
    });
  }

  get f() {
    return this.createTicketForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.createTicketForm.invalid) {
      return;
    }

    this.loading = true;
    this.supportService.createSupportTicket({customerID: this.createTicketForm.get('customerId')?.value, assignedAgent: this.createTicketForm.get('assignedAgent')?.value, issueDescription: this.createTicketForm.get('issueDescription')?.value, status: 'OPEN' }).subscribe({
      next: (ticket) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Ticket created successfully with ID: ${ticket.ticketID}` });
        this.createTicketForm.reset();
        this.submitted = false;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error)
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}

