import { Moment } from "moment";

export interface ParkingLot {
  Type: string;
  Designation: string;
  Permit: boolean;
  Rate?: number;
  Hours: Moment;
}

export interface Building {
  id: number;
  Name: string;
  Abbreviation: string;
  Services: string[];
  NearestLot: ParkingLot;
  Hours: Moment;
}
