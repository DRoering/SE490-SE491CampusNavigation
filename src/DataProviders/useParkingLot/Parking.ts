import { Moment } from "moment";

export interface ParkingLot {
  type: string;
  designation: string;
  permit: boolean;
  rate?: number[];
  hours: Moment;
}

export interface Building {
  id: number;
  name: string;
  abbreviation: string;
  services: string;
  hours: Moment;
}
