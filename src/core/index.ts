import { config } from "./config";

export const usePath = (endpoint: any) => {
  // @ts-ignore
  return config.baseURL + config.apiVersion + config.endpoints[endpoint];
};

interface IHeader {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: any;
}

export const useHeader = (payload: IHeader) => {
  return {
    headers: {
      accept: "application/json",
      method: payload.method,
      body: payload.body,
      "Content-Type": "application/json",
      [config.authorization]: config.token,
    },
  };
};
