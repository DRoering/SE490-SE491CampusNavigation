import L from "leaflet";
import moment from "moment";
import { Building } from "./Building";

const buildings: Building[] = [
  {
    id: 0,
    name: "Administrative Services",
    abbreviation: "AS",
    hours: [
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
      { open: 630, close: 1730 },
    ],
    coordinates: L.latLng([45.552566, -94.152253]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/ASbldg.jpg",
  },
  {
    id: 1,
    name: "Atwood Memorial Center",
    abbreviation: "AMC",
    hours: [
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
    ],
    coordinates: L.latLng([45.553273, -94.150128]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/AMCbldg.jpg",
  },
  {
    id: 2,
    name: "Brown Hall",
    abbreviation: "BH",
    hours: [
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
    ],
    coordinates: L.latLng([45.551895, -94.149639]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/BHbldg.jpg",
  },
  {
    id: 3,
    name: "ISELF",
    abbreviation: "ISELF",
    hours: [
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
      { open: 700, close: 1830 },
    ],
    coordinates: L.latLng([45.551196, -94.150827]),
    img: "https://www.stcloudstate.edu/campusmap/images/bldgimg/ISELFbldg.jpg",
  },
];

const currentDay = moment();

const isOpen = (building: Building) => {
  const day = currentDay.weekday();
  const time = currentDay.hour() * 100;

  if (building.hours) {
    building.isOpen = currentDay.isBetween(
      building.hours[day].close,
      building.hours[day].open,
      "hours"
    );
  }

  console.log(day, time, building.isOpen);
};

buildings.forEach((building) => {
  isOpen(building);
});

export const useFakeBuilding = (): Building[] => buildings;
