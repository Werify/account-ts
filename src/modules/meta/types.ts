import { IApiResponse } from "../../core/response";

export interface IMetaPayload {
  uuid?: string;
  job?: string;
  income_range?: number;
  salary_range?: number;
  fund_source?: string;
  initial_capital?: number;
  wealth_source?: string;
  goals_to_join?: string;
  prefer_market?: string;
  lose_range?: number;
  monthly_saving_range?: number;
  target_range?: number;
  created_at?: string;
  updated_at?: string;
}
export type IMetaResonse = IMetaPayload & IApiResponse;
