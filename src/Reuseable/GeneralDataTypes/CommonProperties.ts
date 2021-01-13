import { Moment } from "moment";

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
