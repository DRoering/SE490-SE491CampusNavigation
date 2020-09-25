import { Moment } from "moment";
import { Location, Hours } from "./";

export interface CommonProperties {
  id: number;
  name: number;
  location: Location;
  accessibility?: string;
  hours?: Hours;
  meetingTime?: Moment;
}
