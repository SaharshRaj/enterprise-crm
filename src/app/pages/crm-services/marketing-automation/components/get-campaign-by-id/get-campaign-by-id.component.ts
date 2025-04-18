import { Component } from '@angular/core';
import { Campaign } from '../../../../../models/Campaign';
import { MarketingAutomationService } from '../../service/marketing-automation.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule if you're using ngModel
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-campaign-by-id',
  standalone: false,
  templateUrl: './get-campaign-by-id.component.html',
  styleUrl: './get-campaign-by-id.component.scss'
})
export class GetCampaignByIdComponent {
  // campaign: Campaign = new Campaign(); // Initialize with a fresh instance
  // campaignIdToSearch: string = ''; // Property to hold the ID entered by the user
  // noRecordFound: boolean = false;
  // submitted: boolean = false;
  // searchError: string = ''; // To display any error messages

  // constructor(private marketingService: MarketingAutomationService) { }

  // searchCampaignById(): void {
  //   this.submitted = true;
  //   this.noRecordFound = false;
  //   this.searchError = '';

  //   if (!this.campaignIdToSearch.trim()) {
  //     this.noRecordFound = true;
  //     return;
  //   }

  //   const campaignId = +this.campaignIdToSearch.trim(); // Convert to number

  //   const campaign = new Campaign();
  //   campaign.campaignID = +this.campaignIdToSearch.trim(); // Assuming campaignID is the property name
  //   campaign.campaignID = campaignId;
  //   this.marketingService.getCampaignId()
  //   .subscribe(
  //       (data) => {
  //         this.campaign = data || new Campaign(); // Assign data or a new Campaign if null
  //         this.noRecordFound = !(data && data.campaignID); // Set based on data existence
  //       },
  //       (error) => {
  //         console.error('Error fetching campaign:', error);
  //         this.searchError = 'Error fetching campaign. Please try again later.';
  //         this.noRecordFound = true;
  //         this.campaign = new Campaign(); // Clear previous data on error
  //       }
  //     );
  // }

  // onSubmit(): void {
  //   this.searchCampaignById();
  // }
  // campaign:Campaign=new Campaign();
  // noRecordFound=false;
  // submitted=false;
  // constructor(private marketingService:MarketingAutomationService){
  // }
  // search(){
  //   this.marketingService.getCampaignById(this.campaign)
  //   .subscribe(data=>{
  //     this.campaign=data;
  //   });
  //   if(this.campaign.campaignID==0){
  //     this.noRecordFound=true;
  //   }
  // }
  // onSubmit(){
  //   this.search();
  //   this.submitted=true;
  // }

  campaign:Campaign=new Campaign();
  noRecordFound=false;
  submitted=false;
  constructor(private markeingService:MarketingAutomationService){
  }
  search(){
    this.markeingService.getCampaignId()
    .subscribe(
      {
        next: (data: Campaign) => this.campaign = data,
        error: (error: HttpErrorResponse) => {
          this.campaign = new Campaign()
          this.campaign.campaignID = 0;
        }
      }
    );
    if(this.campaign.campaignID==0){
      this.noRecordFound=true;
    }
  }
  onSubmit(){
    this.search();
    this.submitted=true;
  }


}