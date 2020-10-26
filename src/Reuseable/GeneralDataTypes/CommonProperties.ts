import { Moment } from "moment";

interface DailyHours {
  open: number;
  close: number;
}

export interface CommonProperties {
  accessibility?: string;
  building?: string;
  coordinates: [number, number] | L.LatLng;
  hours?: DailyHours[];
  id: number;
  meetingTime?: Moment;
  name: string;
  room?: string;
  virtual?: boolean;
  isOpen?: boolean;
}
