import { createReducer, on } from '@ngrx/store';
import * as SalesActions from './sales.actions';
import { initialSalesState } from './sales.state';

export const salesReducer = createReducer(
 initialSalesState,
 on(SalesActions.loadSales, (state) => ({ ...state, loading: true })),
 on(SalesActions.loadSalesSuccess, (state, { sales }) => ({
   ...state,
   loading: false,
   opportunities: sales
 })),
 on(SalesActions.loadSalesFailure, (state, { error }) => ({
   ...state,
   loading: false,
   error
 })),
 on(SalesActions.modifyLead, (state, { lead }) => {
   const exists = state.modified.find(l => l.opportunityID === lead.opportunityID);
   const updated = exists
     ? state.modified.map(l => l.opportunityID === lead.opportunityID ? lead : l)
     : [...state.modified, lead];
   return { ...state, modified: updated };
 }),
 on(SalesActions.discardChanges, (state) => ({
   ...state,
   modified: []
 })),
 on(SalesActions.updateSales, (state) => ({ ...state, loading: true })),
 on(SalesActions.updateSalesSuccess, (state) => ({
   ...state,
   loading: false,
   modified: []
 })),
 on(SalesActions.updateSalesFailure, (state, { error }) => ({
   ...state,
   loading: false,
   error
 }))
);