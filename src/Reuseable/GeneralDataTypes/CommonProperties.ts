import { Moment } from "moment";
import { Service } from "../../DataProviders";

export interface Item {
  abbreviation: string;
  accessibility?: string;
  additionalInfo: string;
  advisor: string;
  address: string;
  application: string;
  building: string;
  category: string[];
  closing: string;
  communication: string;
  coordinates: L.LatLng;
  description?: string;
  designation: string;
  directions?: string;
  endDate: Moment;
  freeStuff: boolean;
  hasFloors: boolean;
  host: string;
  hostUrl?: string;
  hours: { open: Moment; close: Moment };
  id: number;
  imgUrl?: string;
  isEvent: boolean;
  isBuilding: boolean;
  isOpen?: boolean;
  isOrg: boolean;
  isParking: boolean;
  isPublic: boolean;
  latitude: number;
  longitude: number;
  meetingTime: Moment;
  name: string;
  nearestLot?: Item;
  officers: string;
  opening: string;
  parking?: string;
  password: string;
  permit: string[];
  president: string;
  rate?: number[];
  room?: string;
  rsvpLink?: string;
  services?: Service[];
  source?: string;
  startDate: Moment;
  theme: string[];
  type: string;
  upcoming: boolean;
  virtual?: boolean;
  virtualLink?: string;
  webSite?: string;
}

export interface ItemOptions {
  b?: Item;
  e?: Item;
  p?: Item;
  o?: Item;
}
