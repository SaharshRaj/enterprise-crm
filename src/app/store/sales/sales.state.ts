import { SalesOpportunity } from "../../models/SalesOpportunity";

export interface SalesState {

  opportunities: SalesOpportunity[];

  modified: SalesOpportunity[];

  loading: boolean;

  error: string | null;

}

export const initialSalesState: SalesState = {

  opportunities: [],

  modified: [],

  loading: false,

  error: null,

}; 