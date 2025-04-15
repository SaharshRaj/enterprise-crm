import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerProfile } from '../../../../models/CustomerProfile';
import { CustomersService } from '../service/customers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-delete-customer',
    standalone: false,
    templateUrl: './delete-customer.component.html',
    styleUrl: './delete-customer.component.scss'
})
export class DeleteCustomerComponent implements OnInit {
    @Input() selectedCustomerId: number | null = null; // Changed to number | null
    @Output() close = new EventEmitter<void>();
    @Output() deleteSuccessful = new EventEmitter<void>();

    errorMessage: string | null = null;
    successMessage: string | null = null;
    loading: boolean = false;

    constructor(private customersService: CustomersService) { }

    ngOnInit(): void {
        if (this.selectedCustomerId === null) {
            this.errorMessage = "Customer Id is null. Cannot delete";
        }
    }

    confirmDelete(): void {
        if (this.selectedCustomerId === null) {
            this.errorMessage = "No Customer ID provided to delete.";
            return;
        }

        this.loading = true;
        this.errorMessage = null;
        this.successMessage = null;

        this.customersService.deleteCustomer(this.selectedCustomerId).subscribe({
          next: (res: string) =>{
            this.successMessage = res;
            this.deleteSuccessful.emit();
            setTimeout(() => this.onClose(), 1000);
          },
          
          error: (error: HttpErrorResponse) => {
            this.errorMessage= error.error.message,
            console.log(error.error.message);
            this.loading = false
          },
          complete:() =>  this.loading = false
        });
    }

    onClose(): void {
        this.close.emit();
        this.errorMessage = '';
        this.successMessage = '';
    }
}

