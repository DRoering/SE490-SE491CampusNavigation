import moment, { Moment } from "moment";
import { CampusEvent } from "./CampusEvent";

const events: CampusEvent[] = [];

const getThemes = (): string[] => {
  const themes: string[] = [];

  for (let i = 1; i < 4; i++) {
    themes.push("theme" + i);
  }

  return themes;
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
    coordinates: [0, 0],
    id: i,
    name: "Event " + i,
    theme: getThemes(),
    category: getCategories(),
    description: "Test Description",
    freeStuff: i < 6,
    openToPublic: i < 8,
    meetingTime: getHours(),
    host: "SCSU",
    upcoming: true,
    virtualLink: "",
    password: "",
  });
}

export const useFakeEvent = (): CampusEvent[] => {
  return events;
};
