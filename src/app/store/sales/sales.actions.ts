import { createAction, props } from '@ngrx/store';
import { SalesOpportunity } from '../../models/SalesOpportunity';


export const loadSales = createAction('[Sales] Load Sales');
export const loadSalesSuccess = createAction('[Sales] Load Success', props<{ sales: SalesOpportunity[] }>());
export const loadSalesFailure = createAction('[Sales] Load Failure', props<{ error: string }>());
export const modifyLead = createAction('[Sales] Modify Lead', props<{ lead: SalesOpportunity }>());
export const discardChanges = createAction('[Sales] Discard Changes');
export const updateSales = createAction('[Sales] Update Sales', props<{ leads: SalesOpportunity[] }>());
export const updateSalesSuccess = createAction('[Sales] Update Success');
export const updateSalesFailure = createAction('[Sales] Update Failure', props<{ error: string }>());
export const createSales = createAction('[Sales] Create Sales', props<{ lead: SalesOpportunity }>());