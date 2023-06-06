import { useHeader, usePath } from "../../../core";
import { config } from "../../../core/config";
import { handleResponse } from "../../../core/response";

export const totp = () => {
  const request = async (payload: string) => {
    return await fetch(
      usePath(config.endpoints.login.totp.request),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const verify = async () => {
    return await fetch(
      usePath(config.endpoints.login.totp.verify),
      useHeader({ method: "POST" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  return { request, verify };
};
