import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface CampusEvent extends CommonProperties {
  theme: string[];
  category: string[];
  description: string;
  freeStuff: boolean;
  openToPublic: boolean;
  host: string;
  upcoming: boolean;
  virtualLink: string;
  password: string;
}
