import moment, { Moment } from "moment";
import { CampusEvent } from "./CampusEvent";
import L from "leaflet";

const events: CampusEvent[] = [];

enum Bounds {
  minLat = 45.543198,
  minLong = -94.161335,
  maxLat = 45.561067,
  maxLong = -94.144391,
}

const getThemes = (): string[] => {
  const themes: string[] = [];

  for (let i = 1; i < 4; i++) {
    themes.push("theme" + i);
  }

  return themes;
};

const getLat = () => {
  return Math.random() * (Bounds.maxLat - Bounds.minLat) + Bounds.minLat;
};

const getLong = () => {
  return Math.random() * (Bounds.maxLong - Bounds.minLong) + Bounds.minLong;
};

const getLocation = (): L.LatLng => {
  return L.latLng([getLat(), getLong()]);
};

const getCategories = (): string[] => {
  const categories: string[] = [];

  for (let i = 1; i < 7; i++) {
    categories.push("category" + i);
  }

  return categories;
};

const getHours = (): Moment => {
  return moment();
};

for (let i = 1; i < 11; i++) {
  events.push({
    accessibility: "",
    building: "",
    coordinates: getLocation(),
    id: i,
    name: "Event " + i,
    theme: getThemes(),
    category: getCategories(),
    description: "Test Description " + i,
    freeStuff: i < 6,
    hours: { open: getHours(), close: getHours() },
    openToPublic: i < 8,
    host: "SCSU",
    upcoming: true,
    virtualLink: "",
    password: "",
  });
}

export const useFakeEvent = (): CampusEvent[] => {
  return events;
};
