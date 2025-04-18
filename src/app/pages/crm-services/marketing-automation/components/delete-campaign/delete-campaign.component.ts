import { Component } from '@angular/core';
import { Campaign } from '../../../../../models/Campaign';
import { MarketingAutomationService } from '../../service/marketing-automation.service';

@Component({
  selector: 'app-delete-campaign',
  standalone: false,
  templateUrl: './delete-campaign.component.html',
  styleUrl: './delete-campaign.component.scss'
})
export class DeleteCampaignComponent {
campaign:Campaign =new Campaign()
submitted=false;
result!:string;
campaignIdToDelete!:number; // Property to hold the ID entered by the user
constructor(private marketingService:MarketingAutomationService){
  this.campaignIdToDelete =this.marketingService.getCampaignId();
}
delete(){
  this.marketingService.deleteCampaign(this.campaign)
  .subscribe(data=>{this.campaign=data},error=>console.log(error));
  if (!this.campaignIdToDelete) {
    this.result = "Invalid Campaign ID";
    return;
  }
  this.campaign = new Campaign();
}
onSubmit(){
  this.submitted=true;
  this.delete();
  this.result="Campaign Deleted Successfully";
}
}
