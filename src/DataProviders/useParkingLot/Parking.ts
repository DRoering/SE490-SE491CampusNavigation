import { CommonProperties } from "../../Reuseable";

export interface Lot extends CommonProperties {
  type: string;
  designation: string;
  permit: boolean;
  rate?: number[];
}
