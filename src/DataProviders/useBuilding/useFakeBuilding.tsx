import L from "leaflet";
import moment, { Moment } from "moment";
import { Building, ParkingLot } from "./Building";

const buildings: Building[] = [];

enum Bounds {
  minLat = 45.543198,
  minLong = -94.161335,
  maxLat = 45.561067,
  maxLong = -94.144391,
}

const getServices = (): string[] => {
  const services: string[] = [];

  for (let i = 0; i < 3; i++) {
    services.push(`service ${1}`);
  }

  return services;
};

const getLat = () => {
  return Math.random() * (Bounds.maxLat - Bounds.minLat) + Bounds.minLat;
};

const getLong = () => {
  return Math.random() * (Bounds.maxLong - Bounds.minLong) + Bounds.minLong;
};

const getLot = (): ParkingLot => {
  return {
    type: "LotType",
    designation: "lotDesignation",
    permit: true,
    hours: moment(),
  };
};

const getHours = (): { open: Moment; close: Moment } => {
  return { open: moment(), close: moment() };
};

const getLocation = (): L.LatLng => {
  return L.latLng([getLat(), getLong()]);
};

for (let i = 0; i < 15; i++) {
  buildings.push({
    id: i,
    name: `Long Building Name ${i}`,
    abbreviation: `AA${i}`,
    services: getServices(),
    nearestLot: getLot(),
    hours: getHours(),
    coordinates: getLocation(),
  });
}

export const useFakeBuilding = (): Building[] => {
  return buildings;
};
