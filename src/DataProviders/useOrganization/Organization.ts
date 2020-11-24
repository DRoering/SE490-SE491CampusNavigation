import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface Organization extends CommonProperties {
  officers: string;
  meetingTime: Moment;
  communication: string;
  application: string;
  id: number;
  name: string;
}
