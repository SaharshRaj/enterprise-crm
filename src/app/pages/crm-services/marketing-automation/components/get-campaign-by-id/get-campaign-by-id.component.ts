import { Component, OnInit } from '@angular/core';
import { MarketingAutomationService } from '../../service/marketing-automation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign } from '../../../../../models/Campaign';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-get-campaign-by-id',
  standalone: false,
  templateUrl: './get-campaign-by-id.component.html',
  styleUrl: './get-campaign-by-id.component.scss'
})
export class GetCampaignByIdComponent implements OnInit {
  loading = false;
  campaign?: Campaign;
  form!: FormGroup;
  id!: number;

  constructor(
    private readonly marketingService: MarketingAutomationService,
    private confirmationService: ConfirmationService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly messageService: MessageService,
    private readonly router: Router
  ) {
    // Initialize the form with default controls in the constructor
    this.form = new FormGroup({
      text: new FormControl<string>('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      if (this.id) {
        console.log(this.id);
        this.marketingService.getCampaignById(this.id).subscribe({
          next: (campaign: Campaign) => {
            this.campaign = campaign;
            this.form.patchValue({ text: this.campaign.trackingUrl });
          },
          error: (error) => {
            console.error('Error fetching campaign:', error);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load campaign details.' });
          }
        });
      }
    });
  }

  get textControlErrorMessage(): string | null {
    if (this.form?.get('text')?.hasError('required')) {
      return 'The URL is required.';
    }
    return null;
  }

  confirmDelete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Danger Zone',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },
      accept: () => {
        this.handleDelete();
      },
      reject: () => {
        this.messageService.add({ severity: '', summary: 'Canceled', detail: 'You have canceled' });
      },
    });
  }

  handleUpdate(){
    this.loading = true,
    this.campaign!.trackingUrl = this.form.get('text')?.value
    this.marketingService.updateCampaign(this.campaign!).subscribe({
      next: ()=> {
        this.messageService.add({
          severity: 'success', summary: 'Success', detail: 'Campaign Updated Successfully!'
        });
        this.loading = false;
        console.log(this.campaign)
      },
      error: () => {
        this.messageService.add({
          severity: 'error', summary: 'Error', detail: 'Some error occurred!'
        });
        this.loading = false;
      }
    })
  }

  handleDelete() {
    this.loading = true;
    this.marketingService.deleteCampaign(this.campaign!).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success', summary: 'Success', detail: 'Campaign Deleted Successfully!'
        });
        this.loading = false;
        this.router.navigate(['/pages/services/marketing-automation'])
      },
      error: () => {
        this.messageService.add({
          severity: 'error', summary: 'Error', detail: 'Some error occurred!'
        });
        this.loading = false;
      }
    });
  }
}