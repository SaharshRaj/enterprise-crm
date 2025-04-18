import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MarketingAutomationService } from '../../service/marketing-automation.service';
import { Router } from '@angular/router';

// Custom validator for future dates
function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null; // Don't validate if no value is provided (required handles this)
  }
  const selectedDate = new Date(control.value);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Compare only dates

  if (selectedDate < currentDate) {
    return { futureDateValidator: true };
  }
  return null;
}

// Custom validator to prevent numerical names
function nonNumericalNameValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }
  if (!isNaN(parseFloat(control.value)) && isFinite(control.value)) {
    return { pattern: true };
  }
  return null;
}

@Component({
  selector: 'app-create-campaign',
  standalone: false,
  templateUrl: './create-campaign.component.html',
  styleUrl: './create-campaign.component.scss'
})
export class CreateCampaignComponent implements OnInit {
  formData: FormGroup;
  successMessageVisible: boolean = false;
  showForm: boolean = true; // Controls form visibility (initially visible)

  constructor(
    private fb: FormBuilder,
    private marketingService: MarketingAutomationService,
    private router: Router
  ) {
    this.formData = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), nonNumericalNameValidator]],
      startDate: ['', [Validators.required, futureDateValidator]],
      endDate: ['', [Validators.required, futureDateValidator]],
      type: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // You can add any initialization logic here
  }

  get name() { return this.formData.get('name'); }
  get startDate() { return this.formData.get('startDate'); }
  get endDate() { return this.formData.get('endDate'); }
  get type() { return this.formData.get('type'); }

  onSubmit(formData: any): void {
    if (this.formData.valid) {
      this.marketingService.registerCampaign(formData)
        .subscribe({
          next: (response) => {
            console.log('Campaign created successfully:', response);
            this.successMessageVisible = true;
            // Optionally reset the form after successful submission
            this.formData.reset();
            // Optionally navigate to the campaign list or another page
            // this.router.navigate(['/campaigns']);
          },
          error: (error) => {
            console.error('Error creating campaign:', error);
            // Handle error display to the user
          }
        });
    } else {
      // Trigger validation to show error messages
      Object.values(this.formData.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  successMessage(): void {
    this.successMessageVisible = true;
    setTimeout(() => {
      this.successMessageVisible = false;
    }, 3000); // Hide after 3 seconds
  }

  cancelForm(): void {
    this.showForm = false;
    // Optionally navigate back to the campaign list or another page
    this.router.navigate(['pages/services/marketing-automation']);
  }
}