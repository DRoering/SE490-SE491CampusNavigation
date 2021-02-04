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
    ): number => {
      if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) return 1;
      if (b.name[0].toLowerCase() > a.name[0].toLowerCase()) return -1;
      return 0;
    },
  },

  Distance: {
    type: "Distance",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => {
      if (a.closerThan(b.coordinates)) return 1;
      if (b.closerThan(a.coordinates)) return -1;
      return 0;
    },
  },

  Date: {
    type: "Date",
    function: (
      a: Building | CampusEvent | Lot | Organization,
      b: Building | CampusEvent | Lot | Organization
    ): number => {
      if (a.hours?.open.isBefore(b.hours?.open)) return 1;
      if (b.hours?.open.isBefore(a.hours?.open)) return -1;
      return 0;
    },
  },
};
