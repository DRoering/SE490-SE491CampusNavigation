import { Moment } from "moment";
import { Building, CampusEvent, Lot, Organization } from "../../DataProviders";

export interface CommonProperties {
  accessibility?: string;
  building?: string;
  coordinates: L.LatLng;
  description?: string;
  hours?: { open: Moment; close?: Moment };
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  room?: string;
  virtual?: boolean;
  isOpen?: boolean;
  imgUrl?: string;
}

export interface ItemOptions {
  b?: Building;
  e?: CampusEvent;
  p?: Lot;
  o?: Organization;
}
