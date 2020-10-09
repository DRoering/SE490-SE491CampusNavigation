import moment, { Moment } from "moment";
import { ParkingLot } from "./Parking";
import L from "leaflet";

const parkingLots: ParkingLot[] = [];

enum Bounds {
  minLat = 45.543198,
  minLong = -94.161335,
  maxLat = 45.561067,
  maxLong = -94.144391,
}

const getLotType = (): string => {
  const types: string[] = [];
  let lotType: string = types[0];

  for (let i = 0; i < 6; i++) {
    types.push();
    if (types[i] === lotType) {
      lotType = types[i];
    }
  }
  return lotType;
};

const getRate = (): number[] => {
  const lotRates: number[] = [];
  const rate: number[] = [];
  for (let i = 0; i < rate.length; i++) {
    lotRates.push(rate[i]);
  }
  return lotRates;
};

const getHours = (): { open: Moment; close: Moment } => {
  return { open: moment(), close: moment() };
};

const getLocation = (): L.LatLng => {
  return L.latLng([getLat(), getLong()]);
};

const getLat = () => {
  return Math.random() * (Bounds.maxLat - Bounds.minLat) + Bounds.minLat;
};

const getLong = () => {
  return Math.random() * (Bounds.maxLong - Bounds.minLong) + Bounds.minLong;
};

for (let i = 0; i < 15; i++) {
  parkingLots.push({
    id: i,
    type: "Student",
    name: "Lot A",
    coordinates: getLocation(),
    designation: "AA",
    permit: true,
    rate: getRate(),
    hours: getHours(),
  });
}

export const useFakeParking = (): ParkingLot[] => {
  return parkingLots;
};
