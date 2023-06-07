import { useHeader, usePath } from "../../../core";
import { config } from "../../../core/config";
import { handleResponse } from "../../../core/response";
import { IProfile, IProfileUpdatePayload } from "./types";

export const user = () => {
  const update = async (payload: IProfileUpdatePayload) => {
    return await fetch(
      usePath(config.endpoints.profile.profile),
      useHeader({ method: "PUT", body: payload })
    ).then(async (response) => {
      return await handleResponse(response);
    });
  };

  const single = async (payload: string) => {
    return await fetch(
      usePath(`${config.endpoints.profile.profile}/${payload}`),
      useHeader({ method: "GET" })
    ).then(async (response) => {
      return (await handleResponse(response)) as IProfile;
    });
  };

  return { update, single };
};
