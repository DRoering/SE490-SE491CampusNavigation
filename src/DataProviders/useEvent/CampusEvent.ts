import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface CampusEvent extends CommonProperties {
  additionalInfo: string;
  category: string[];
  description?: string;
  freeStuff: boolean;
  endDate: Moment;
  host: string;
  hostUrl?: string;
  isPublic: boolean;
  password: string;
  rsvpLink?: string;
  startDate: Moment;
  theme: string[];
  upcoming: boolean;
  virtualLink?: string;
}
