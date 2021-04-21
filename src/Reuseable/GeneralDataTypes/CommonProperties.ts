import { Moment } from "moment";
import { BuildingFloor, Service } from "../../DataProviders";

export interface Item {
  accessibility?: string;
  coordinates: L.LatLng;
  description?: string;
  hours: { open: Moment; close: Moment };
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  room?: string;
  virtual?: boolean;
  isOpen?: boolean;
  imgUrl?: string;
  isBuilding: boolean;
  isParking: boolean;
  isOrg: boolean;
  isEvent: boolean;
  opening: string;
  closing: string;
  abbreviation: string;
  directions?: string;
  parking?: string;
  nearestLot?: Item;
  services?: Service[];
  additionalInfo: string;
  category: string[];
  freeStuff: boolean;
  endDate: Moment;
  host: string;
  hostUrl?: string;
  isPublic: boolean;
  password: string;
  rsvpLink?: string;
  startDate: Moment;
  theme: string[];
  upcoming: boolean;
  virtualLink?: string;
  source?: string;
  type: string;
  designation: string;
  permit: string[];
  rate?: number[];
  advisor: string;
  president: string;
  location: string;
  officers: string;
  meetingTime: Moment;
  communication: string;
  application: string;
  webSite?: string;
  hasFloors: boolean;
}

export interface ItemOptions {
  b?: Item;
  e?: Item;
  p?: Item;
  o?: Item;
}
