import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportTicket } from '../../../../../models/SupportTicket';
import { CustomerSupportService } from '../../service/customer-support.service';

@Component({
  selector: 'app-create-ticket',
  standalone: false,
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})

export class CreateTicketComponent implements OnInit {
  ticketForm!: FormGroup;
  loading = false;
  error: string | null = null;
  success = false;

  constructor(
    private fb: FormBuilder,
    private supportService: CustomerSupportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      customerID: ['', Validators.required],
      issueDescription: ['', Validators.required],
      status: ['OPEN']
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.loading = true;
      this.error = null;
      this.success = false;

      const supportTicket: SupportTicket = this.ticketForm.value;

      this.supportService.createTicket(supportTicket).subscribe({
        next: (response: any) => {
          console.log('Ticket created successfully:', response);
          this.loading = false;
          this.success = true;
          this.router.navigate(['pages/services/customer-support']);
        },
        error: (error: { message: string; }) => {
          this.error = error.message || 'Failed to create ticket.';
          this.loading = false;
          this.success = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.ticketForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
