import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SalesActions from './sales.actions';
import { catchError, from, map, mergeMap, of } from 'rxjs';
import { SalesService } from '../../pages/crm-services/sales-automation/service/sales.service';

@Injectable()
export class SalesEffects {
  actions$ = inject(Actions)
 constructor(private salesService: SalesService) {}
 loadSales$ = createEffect(() =>
   this.actions$.pipe(
     ofType(SalesActions.loadSales),
     mergeMap(() =>
       this.salesService.getSales().pipe(
         map(sales => SalesActions.loadSalesSuccess({ sales })),
         catchError(error => of(SalesActions.loadSalesFailure({ 
          error: error.message
         })))
       )
     )
   )
 );
 updateSales$ = createEffect(() =>
  this.actions$.pipe(
    ofType(SalesActions.updateSales),
    mergeMap(({ leads }) =>
      from(leads).pipe(
        mergeMap(lead =>
          this.salesService.updateSales(lead).pipe(
            map(() => SalesActions.updateSalesSuccess()),
            catchError(error => of(SalesActions.updateSalesFailure({ error: error.message })))
          )
        )
      )
    )
  )
 );
}