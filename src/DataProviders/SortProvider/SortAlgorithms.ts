import L from "leaflet";
import { Item } from "../../Reuseable";

export interface SortType {
  function: (a: Item, b: Item) => number;
  type: string;
}

export const SortAlgorithms = {
  Alphabetical: {
    type: "Alpha",
    function: (a: Item, b: Item): number => a.name.localeCompare(b.name),
  },

  Distance: {
    type: "Distance",
    function: (a: Item, b: Item): number => {
      const fakeLocation = L.latLng([45.551613, -94.148977]);
      const aDistance = a.coordinates
        ? a.coordinates.distanceTo(fakeLocation)
        : 10000;
      const bDistance = b.coordinates
        ? b.coordinates.distanceTo(fakeLocation)
        : 10000;

      if (aDistance > bDistance) return 1;
      if (bDistance > aDistance) return -1;
      return 0;
    },
  },

  Date: {
    type: "Date",
    function: (a: Item, b: Item): number => {
      if (a.hours?.open.isBefore(b.hours?.open)) return -1;
      if (b.hours?.open.isBefore(a.hours?.open)) return 1;
      return 0;
    },
  },
};
