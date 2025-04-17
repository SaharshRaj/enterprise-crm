import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SalesState } from './sales.state';

export const selectSalesState = createFeatureSelector<SalesState>('sales');
export const selectAllOpportunities = createSelector(
 selectSalesState,
 state => state.opportunities
);
export const selectModifiedOpportunities = createSelector(
 selectSalesState,
 state => state.modified
);
export const selectLoading = createSelector(
 selectSalesState,
 state => state.loading
);
export const selectError = createSelector(
 selectSalesState,
 state => state.error
);