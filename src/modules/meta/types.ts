import { IApiResponse } from "../../core/response";

export interface IMetaPayload {
  uuid: string;
  key: string;
  value: number;
}
export type IMetaResonse = IMetaPayload & IApiResponse;
