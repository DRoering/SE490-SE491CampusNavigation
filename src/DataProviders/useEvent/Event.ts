import { Moment } from "moment";

export interface Event {
  name: string;
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
