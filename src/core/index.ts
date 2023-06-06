import { config } from "./config";

export const usePath = (endpoint: string) => {
  return config.baseURL + config.apiVersion + endpoint;
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
      body: JSON.stringify(payload.body),
      "Content-Type": "application/json",
      [config.authorization]: config.token,
    },
  };
};
