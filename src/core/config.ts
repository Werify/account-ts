/**
 * @description Set Base URL and other configs
 * @returns your base URL is Set and other configs added
 */
export let config = {
  baseURL: "https://account.werify.net/api/",
  apiVersion: "v1/",
  authorization: "Authorization",
  token: "",
  endpoints: {
    login: {
      otp: {
        request: "request-otp",
        verify: "verify-otp",
      },
      totp: {
        request: "request-totp",
        verify: "verify-totp",
        enable: "enable-totp",
        activate: "activate-totp",
      },
    },
    profile: {
      financials: {},
      educations: {},
      update: "",
      read: "",
      upload: "",
    },
  },
};
