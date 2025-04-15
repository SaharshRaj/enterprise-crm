import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  SalesOpportunity,
  SalesStage,
} from '../../../../../models/SalesOpportunity';
import { SalesService } from '../../service/sales.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { PaginatorState } from 'primeng/paginator';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-sales-pipeline',
  standalone: false,
  templateUrl: './sales-pipeline.component.html',
  styleUrl: './sales-pipeline.component.scss',
})
export class SalesPipelineComponent implements OnInit, OnDestroy {
  @Input({ required: true }) allSales$!: Observable<SalesOpportunity[]>;

  formGroup!: FormGroup;
  selectedLead: SalesOpportunity | null = null;
  modifiedLeads: SalesOpportunity[] = [];
  loading = false;
  private readonly destroy$ = new Subject<void>();

  salesPipeline: Record<SalesStage, SalesOpportunity[]> = {
    PROSPECTING: [],
    QUALIFICATION: [],
    CLOSED_LOST: [],
    CLOSED_WON: [],
  };

  first: number = 0;
  total!: number;
  rows: number = 4;
  pagedSalesPipeline: Record<SalesStage, SalesOpportunity[]> = {
    PROSPECTING: [],
    QUALIFICATION: [],
    CLOSED_LOST: [],
    CLOSED_WON: [],
  };


  originalSalesPipeline: Record<SalesStage, SalesOpportunity[]> = {
    PROSPECTING: [],
    QUALIFICATION: [],
    CLOSED_LOST: [],
    CLOSED_WON: [],
  };

  showToast(toast : {severity: string, summary: string, message: string}){
    this.messageService.add({ severity: toast.severity, summary: toast.summary, detail: toast.message });
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 4;
    this.updatePagedSalesPipeline();
  }


  onSave() {
    this.loading = true;
    this.modifiedLeads.forEach(
      (lead) => this.salesService.updateSales(lead).subscribe({
        next: (sale: SalesOpportunity) => {
          this.showToast({severity: 'success', message: `Successfully saved changes for Lead #${sale.opportunityID}`, summary:'Success'})
        },
        error: (error: any) => {
          this.showToast({severity: 'error', message: error.error.message, summary:'Error'})
          this.loading = false;
        },
        complete: () => {
          this.modifiedLeads = [];
          this.loading = false;
          this.loadSalesData();
        },
      })
    );
  }

  discardChanges() {
    this.salesPipeline = this.deepCopy(this.originalSalesPipeline);
    this.modifiedLeads = [];
    this.updatePagedSalesPipeline();
    this.showToast({severity: 'success', message: `All changes discarded successfully`, summary:'Success'})
  }

  visible: boolean = false;

  showDialog(lead: SalesOpportunity) {
    this.selectedLead = lead;
    this.visible = true;
  }

  bgClasses: Record<SalesStage, string> = {
    PROSPECTING:
      'bg-blue-100 text-blue-600 dark:border-blue-600 dark:text-blue-200 dark:bg-transparent ',
    QUALIFICATION:
      'bg-purple-100 text-purple-600 dark:border-purple-600 dark:text-purple-200 dark:bg-transparent ',
    CLOSED_LOST:
      'bg-red-100 text-red-600 dark:border-red-600 dark:text-red-200 dark:bg-transparent ',
    CLOSED_WON:
      'bg-green-100 text-green-600 dark:border-green-600 dark:text-green-200 dark:bg-transparent ',
  };

  salesStageKeys = Object.values(SalesStage);

  constructor(private readonly salesService: SalesService, private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      date: new FormControl<Date | null>(null, {
        validators: [
          (control) => {
            const value = control.value;
            if (!value) {
              return { required: true };
            }
            if (value <= new Date()) {
              return { futureDate: true };
            }
            if (this.selectedLead && value >= new Date(this.selectedLead.closingDate)) {
              return { beforeClosingDate: true };
            }
            return null;
          },
        ],
        updateOn: 'change',
      }),
    });
    this.loadSalesData();
  }

  loadSalesData() {
    this.allSales$.pipe(takeUntil(this.destroy$)).subscribe((sales) => {
      this.total = sales.length;
      this.salesStageKeys.forEach(
        (stage) =>
          (this.salesPipeline[stage] = sales.filter(
            (sale) => sale.salesStage === stage
          ))
      );
      // Create a deep copy of the initial sales data
      this.originalSalesPipeline = this.deepCopy(this.salesPipeline);
      this.updatePagedSalesPipeline();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updatePagedSalesPipeline() {
    this.salesStageKeys.forEach((stage) => {
      const startIndex = this.first;
      const endIndex = this.first + this.rows;
      this.pagedSalesPipeline[stage] = this.salesPipeline[stage].slice(
        startIndex,
        endIndex
      );
    });
  }



  onDrop(event: CdkDragDrop<SalesOpportunity[]>, newStage: SalesStage) {
    if (event.previousContainer !== event.container) {
      const lead = event.previousContainer.data[event.previousIndex];
      const previousStage = event.previousContainer.id as SalesStage;

      const leadCopy = { ...lead };
      leadCopy.salesStage = newStage;

      const existingIndex = this.modifiedLeads.findIndex(
        (modifiedLead) => modifiedLead.opportunityID === leadCopy.opportunityID
      );

      if (existingIndex === -1) {
        this.modifiedLeads.push(leadCopy);
      } else {
        this.modifiedLeads[existingIndex] = leadCopy;
      }

      const previousIndexInOriginal = this.salesPipeline[
        previousStage
      ].findIndex((item) => item.opportunityID === lead.opportunityID);
      if (previousIndexInOriginal !== -1) {
        this.salesPipeline[previousStage].splice(previousIndexInOriginal, 1);
      }

      lead.salesStage = newStage;
      this.salesPipeline[newStage].splice(
        event.currentIndex + this.first,
        0,
        lead
      );

      this.updatePagedSalesPipeline();
    }
  }

  onSubmit() {
    if (this.formGroup.valid && this.selectedLead) {
      const selectedDate = this.formGroup.get('date')?.value as Date;
      const year = selectedDate.getFullYear();
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = selectedDate.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      const updatedLead = { ...this.selectedLead };
      updatedLead.followUpReminder = formattedDate;

      const existingIndexModified = this.modifiedLeads.findIndex(
        (modifiedLead) => modifiedLead.opportunityID === updatedLead.opportunityID
      );
      if (existingIndexModified === -1) {
        this.modifiedLeads.push(updatedLead);
      } else {
        this.modifiedLeads[existingIndexModified].followUpReminder =
          updatedLead.followUpReminder;
      }

      
      for (const stage in this.salesPipeline) {
        const index = this.salesPipeline[stage as SalesStage].findIndex(
          (lead) => lead.opportunityID === updatedLead.opportunityID
        );
        if (index !== -1) {
          this.salesPipeline[stage as SalesStage][index] = {
            ...this.salesPipeline[stage as SalesStage][index],
            followUpReminder: formattedDate,
          };
          break; 
        }
      }

      
      this.updatePagedSalesPipeline();

      this.visible = false;
    }
  }

  leadTitle(lead: SalesOpportunity) {
    return `ID ${lead.opportunityID}`;
  }

  
  private deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
}