import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface Event extends CommonProperties {
  theme: string[];
  category: string[];
  description: string;
  freeStuff: boolean;
  openToPublic: boolean;
  meetingTime: Moment;
  host: string;
  upcoming: boolean;
  virtualLink: string;
  password: string;
}
