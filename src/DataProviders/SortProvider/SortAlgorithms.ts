import L from "leaflet";
import { Building, CampusEvent, Lot, Organization } from "..";

export interface SortType {
  type: string;
  function: (
    a: Building | CampusEvent | Lot | Organization,
    b: Building | CampusEvent | Lot | Organization
  ) => number;
}

export const SortAlgorithms = {
  Alphabetical: {
    type: "Alpha",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => a.name.localeCompare(b.name),
  },

  Distance: {
    type: "Distance",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => {
      const fakeLocation = L.latLng([45.551613, -94.148977]);
      const aDistance = a.coordinates
        ? a.coordinates.distanceTo(fakeLocation)
        : 10000;
      const bDistance = b.coordinates
        ? b.coordinates.distanceTo(fakeLocation)
        : 10000;

      console.log("aDistance: " + aDistance);
      console.log("bDistance: " + bDistance);

      if (aDistance > bDistance) return 1;
      if (bDistance > aDistance) return -1;
      return 0;
    },
  },

  Date: {
    type: "Date",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => {
      if (a.hours?.open.isBefore(b.hours?.open)) return -1;
      if (b.hours?.open.isBefore(a.hours?.open)) return 1;
      return 0;
    },
  },

  Open: {
    type: "Open",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => {
      if (a.hours?.open.isBefore(b.hours?.open)) return -1;
      if (b.hours?.open.isBefore(a.hours?.open)) return 1;
      return 0;
    },
  },
};
