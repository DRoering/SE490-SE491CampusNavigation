import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

export interface ParkingLot extends CommonProperties {
  type: string;
  designation: string;
  permit: boolean;
  rate?: number[];
}

export interface Building {
  id: number;
  name: string;
  abbreviation: string;
  services: string;
  hours: Moment;
}
