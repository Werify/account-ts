import { useHeader, usePath } from "../../../core";
import { config } from "../../../core/config";
import { handleResponse } from "../../../core/response";
import { IFinancialsPayload } from "./types";

export const financials = () => {
  const store = async (payload: IFinancialsPayload) => {
    return await fetch(
      usePath(config.endpoints.profile.financials),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const destroy = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.profile.financials}/${payload}`),
      useHeader({ method: "DELETE" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const list = async () => {
    return await fetch(
      usePath(config.endpoints.profile.financials),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const update = async (payload: IFinancialsPayload) => {
    return await fetch(
      usePath(config.endpoints.profile.financials),
      useHeader({ method: "PUT", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const single = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.profile.financials}/${payload}`),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  return { store, destroy, list, update, single };
};
