import { Component } from '@angular/core';
import { Campaign } from '../../../../../models/Campaign';
import { MarketingAutomationService } from '../../service/marketing-automation.service';

@Component({
  selector: 'app-update-campaign',
  standalone: false,
  templateUrl: './update-campaign.component.html',
  styleUrl: './update-campaign.component.scss'
})
export class UpdateCampaignComponent {
  campaign:Campaign=new Campaign();
  result!:string;
  campaigns!:Campaign[];
  noRecordFound = false;
  submitted = false;
  NotificationType: any[] = [
    { value: 'EMAIL', label: 'EMAIL' },
    { value: 'SMS', label: 'SMS' },
  ];
  constructor(private marketingService: MarketingAutomationService) {
    this.campaign.campaignID = this.marketingService.getCampaignId();
    this.marketingService.getCampaignById(this.campaign)
      .subscribe(data => {
        this.campaign.campaignID = data['campaignID'];
        this.campaign.name = data['name'];
        this.campaign.startDate = data['startDate'];
        this.campaign.endDate = data['endDate'];
        this.campaign.type = data['type'];
      });
   }

  update() {
    this.marketingService.updateCampaign(this.campaign)
      .subscribe(data => {
        this.campaign = data;
      },error=>console.log(error));
      this.campaign=new Campaign();
    if (this.campaign.campaignID == 0) {
      this.noRecordFound = true;
    }
  }

  onSubmit() {
    this.update();
    this.submitted = true;
  }
}
