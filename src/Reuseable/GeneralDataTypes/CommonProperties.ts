import { Moment } from "moment";

export interface CommonProperties {
  accessibility?: string;
  building?: string;
  coordinates: [number, number] | L.LatLng;
  hours?: { open: Moment; close: Moment };
  id: number;
  meetingTime?: Moment;
  name: string;
  room?: string;
  virtual?: boolean;
}
