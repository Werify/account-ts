import { useHeader, usePath } from "../../../core";
import { config } from "../../../core/config";
import { handleResponse } from "../../../core/response";
import { IEducationPayload } from "./types";

export const educations = () => {
  const store = async (payload: IEducationPayload) => {
    return await fetch(
      usePath(config.endpoints.profile.educations),
      useHeader({ method: "POST", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const destroy = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.profile.educations}/${payload}`),
      useHeader({ method: "DELETE" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const list = async () => {
    return await fetch(
      usePath(config.endpoints.profile.educations),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const update = async (payload: IEducationPayload) => {
    return await fetch(
      usePath(config.endpoints.profile.educations),
      useHeader({ method: "PUT", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const single = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.profile.educations}/${payload}`),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  return { store, destroy, list, update, single };
};
