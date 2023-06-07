import { meta } from "./modules/meta/";
import { profile } from "./modules/profile";
import { config } from "./core/config";
import { login } from "./modules/login";

export const account = {
  meta: meta(),
  login: login,
  config: config,
  profile: profile,
};
