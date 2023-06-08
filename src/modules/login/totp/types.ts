import { IApiResponse } from "../../../core/response";

export interface IVerifyTOTPPayload {
  otp: string;
  hash: string;
  id: string;
}

export interface IRequestTOTPPayload {
  identifier: string;
}

export interface IRequestTOTPResponse extends IApiResponse {
  results: {
    hash: string;
    id: string;
  };
}

export interface IVerifyTOTPResponse extends IApiResponse {
    results: {
        jwt_token: string;
    };
}

export interface IEnableTOTPResponse extends IApiResponse {
  results: {
    secret: string;
  };
}

export interface IActivateTOTPPayload {
  pass_code: string;
}