import { IApiResponse } from "../../core/response";

export interface INumbersListResponse extends IApiResponse {
  results: {
    uuid: string;
    type: string;
    number: string;
    country: string;
    category: string;
    priority: number;
    verified: boolean;
    call_type: string;
    last_call: string;
    country_code: string;
  }[];
}

export interface INumbersPayload {
  type?: string;
  number?: string;
  country?: string;
  category?: string;
  priority?: number;
  call_type?: string;
}
