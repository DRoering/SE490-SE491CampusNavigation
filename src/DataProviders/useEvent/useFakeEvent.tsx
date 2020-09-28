import moment from "moment";
import { Moment } from "moment";
import { Event } from "./Event";

const events: Event[] = [];

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
    name: "Event " + i,
    theme: getThemes(),
    category: getCategories(),
    description: "Test Description",
    freeStuff: true,
    openToPublic: true,
    meetingTime: getHours(),
    host: "SCSU",
    upcoming: true,
    virtualLink: "",
    password: "",
  });
}

export const useFakeEvent = (): Event[] => {
  return events;
};
