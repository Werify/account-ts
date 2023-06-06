import { useHeader, usePath } from "../../../core";
import { config } from "../../../core/config";
import { handleResponse } from "../../../core/response";
import {
  IRequestOtpPayload,
  IRequestOtpResponse,
  IVerifyOtpPayload,
} from "./types";

export const otp = () => {
  const request = async (payload: IRequestOtpPayload) => {
    return await fetch(
      usePath(config.endpoints.login.otp.request),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return (await handleResponse(response)) as IRequestOtpResponse;
    });
  };

  const verify = async (payload: IVerifyOtpPayload) => {
    return await fetch(
      usePath(config.endpoints.login.otp.verify),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  return { request, verify };
};
