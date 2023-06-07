export interface IProfile {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  mobile_number?: string;
  avatar?: string;
  cover?: string;
  language?: string;
  currency?: string;
  timezone?: string;
  calendar?: string;
  shortcuts?: string;
  layout?: string;
  latitude?: string;
  longitude?: string;
}

export type IProfileUpdatePayload = IProfile;
