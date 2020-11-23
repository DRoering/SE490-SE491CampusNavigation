import { CommonProperties } from "../../Reuseable";

export interface Lot extends CommonProperties {
  type: string;
  designation: string;
  permit: string[];
  rate?: number[];
  longitude: number;
  latitude: number;
}
