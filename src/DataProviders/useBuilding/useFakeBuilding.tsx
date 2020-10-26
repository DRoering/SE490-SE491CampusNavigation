import L from "leaflet";
import moment, { Moment } from "moment";
import { Building, ParkingLot } from "./Building";

const buildings: Building[] = [
  {
    id: 0,
    name: "Administrative Services",
    abbreviation: "AS",
    hours: { open: moment("7:00 am"), close: moment("5:30 pm") },
    coordinates: L.latLng([45.552566, -94.152253]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/ASbldg.jpg",
  },
  {
    id: 1,
    name: "Atwood Memorial Center",
    abbreviation: "AMC",
    hours: { open: moment("7:30am"), close: moment("11:00 pm") },
    coordinates: L.latLng([45.553273, -94.150128]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/AMCbldg.jpg",
  },
  {
    id: 2,
    name: "Brown Hall",
    abbreviation: "BH",
    hours: { open: moment("7:00 am"), close: moment("6:40 pm") },
    coordinates: L.latLng([45.551895, -94.149639]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/BHbldg.jpg",
  },
  {
    id: 3,
    name: "ISELF",
    abbreviation: "ISELF",
    hours: { open: moment("7:00 am"), close: moment("6:30 pm") },
    coordinates: L.latLng([45.551196, -94.150827]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/ISELFbldg.jpg",
  },
];

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

// for (let i = 0; i < 15; i++) {
//   buildings.push({
//     id: i,
//     name: `Long Building Name ${i}`,
//     abbreviation: `AA${i}`,
//     services: getServices(),
//     nearestLot: getLot(),
//     hours: getHours(),
//     coordinates: getLocation(),
//   });
// }

export const useFakeBuilding = (): Building[] => {
  return buildings;
};
