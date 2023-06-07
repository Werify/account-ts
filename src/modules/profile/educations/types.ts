import { IApiResponse } from "../../../core/response";

export interface IEducationPayload {
  title: string;
  type: number;
}

export type IEducationResponse = IEducationPayload & IApiResponse;
