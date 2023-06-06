import { IApiResponse } from "../../../core/response";

export interface IVerifyOtpPayload {
  otp: string;
  hash: string;
  id: string;
}

export interface IRequestOtpPayload {
  identifier: string;
}

export interface IRequestOtpResponse extends IApiResponse {
  results: {
    hash: string;
    id: string;
  };
}
