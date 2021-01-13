import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface Organization extends CommonProperties {
  advisor: string;
  president: string;
  location: string;
  imgUrl: string | undefined;
  officers: string;
  meetingTime: Moment;
  communication: string;
  application: string;
  id: number;
  name: string;
  webSite?: string;
}
