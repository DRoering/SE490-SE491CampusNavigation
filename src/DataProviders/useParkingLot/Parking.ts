import { Moment } from "moment";

export interface ParkingLot {
  Type: string;
  Designation: string;
  Permit: boolean;
  Rate?: number[];
  Hours: Moment;
}

export interface Building {
  id: number;
  Name: string;
  Abbreviation: string;
  Services: string;
  Hours: Moment;
}

export class StudentLot {
  residenceDes = "A1, A2, A3, C, E, K/O, 4th Avenue Parking Ramp, Stateview";
  commuterDes = "K, M, N, 4th Avenue Parking Ramp, V";
}
