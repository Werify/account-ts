import { useHeader, usePath } from "../../core";
import { config } from "../../core/config";
import { handleResponse } from "../../core/response";
import { INumbersPayload, INumbersListResponse } from "./types";

export const numbers = () => {
  const store = async (payload: INumbersPayload) => {
    return await fetch(
      usePath(config.endpoints.numbers),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const destroy = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.numbers}/${payload}`),
      useHeader({ method: "DELETE" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const list = async () => {
    return await fetch(
      usePath(config.endpoints.numbers),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return (await handleResponse(response)) as INumbersListResponse;
    });
  };

  const update = async (payload: INumbersPayload) => {
    return await fetch(
      usePath(config.endpoints.numbers),
      useHeader({ method: "PUT", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const single = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.numbers}/${payload}`),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return (await handleResponse(response)) as INumbersListResponse;
    });
  };

  return { store, destroy, list, update, single };
};
