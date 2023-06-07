import { useHeader, usePath } from "../../core";
import { config } from "../../core/config";
import { handleResponse } from "../../core/response";
import { IMetaPayload } from "./types";

export const meta = () => {
  const store = async (payload: IMetaPayload) => {
    return await fetch(
      usePath(config.endpoints.meta),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const destroy = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.meta}/${payload}`),
      useHeader({ method: "DELETE" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const list = async () => {
    return await fetch(
      usePath(config.endpoints.meta),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const update = async (payload: IMetaPayload) => {
    return await fetch(
      usePath(config.endpoints.meta),
      useHeader({ method: "PUT", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const single = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.meta}/${payload}`),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  return { store, destroy, list, update, single };
};
