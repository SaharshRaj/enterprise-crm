import { Component, OnInit } from '@angular/core';
import { SalesService } from './service/sales.service';
import { Observable, take } from 'rxjs';
import { SalesOpportunity } from '../../../models/SalesOpportunity';
import { Store } from '@ngrx/store';
import { selectAllOpportunities, selectLoading } from '../../../store/sales/sales.selector';
import { loadSales } from '../../../store/sales/sales.actions';


@Component({
  selector: 'app-sales-automation',
  standalone: false,
  templateUrl: './sales-automation.component.html',
  styleUrl: './sales-automation.component.scss'
})
export class SalesAutomationComponent implements OnInit {

  salesList$!:Observable<SalesOpportunity[]>;
  loaded$!: Observable<boolean>;

  constructor(private readonly salesService: SalesService, private readonly store: Store){}

  ngOnInit(): void {
    this.salesList$ = this.store.select(selectAllOpportunities);
    this.loaded$ = this.store.select(selectLoading);
    this.loaded$.pipe(take(1)).subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(loadSales());
      }
    });
  }

  title = "Sales-Automation"


}
