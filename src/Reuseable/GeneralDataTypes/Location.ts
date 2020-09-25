import { Building } from "../../DataProviders";

export interface Location {
  coordinates: number[];
  virtual?: boolean;
  building?: string;
  room?: string;
}
