import { CommonProperties } from "../../Reuseable";

export interface ParkingLot extends CommonProperties {
  type: string;
  designation: string;
  permit: boolean;
  rate?: number[];
}
