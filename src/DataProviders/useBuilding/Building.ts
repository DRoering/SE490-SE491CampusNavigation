import { Moment } from "moment";
import { CommonProperties } from "../../Reuseable";

interface DailyHours {
  open: number;
  close: number;
}

export interface ParkingLot {
  type: string;
  designation: string;
  permit: boolean;
  rate?: number;
  hours: Moment;
}

export interface Building extends CommonProperties {
  abbreviation: string;
  services?: string[];
  nearestLot?: ParkingLot;
  img: string;
  buildingHours: DailyHours[];
}
