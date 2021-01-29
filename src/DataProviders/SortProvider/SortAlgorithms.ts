import { Building, CampusEvent, Lot } from "..";

export interface SortType {
  type: string;
  function: (
    a: Building | CampusEvent | Lot,
    b: Building | CampusEvent | Lot
  ) => number;
}

export const SortAlgorithms = {
  Alphabetical: {
    type: "alpha",
    function: (
      a: Building | CampusEvent | Lot,
      b: Building | CampusEvent | Lot
    ): number => {
      if (a.name[0] > b.name[0]) return 1;
      if (b.name[0] > a.name[0]) return -1;
      return 0;
    },
  },

  Distance: {
    type: "distance",
    function: (
      a: Building | CampusEvent | Lot,
      b: Building | CampusEvent | Lot
    ): number => {
      if (a.closerThan(b)) return 1;
      if (b.closerThan(a)) return -1;
      return 0;
    },
  },

  Date: {
    type: "date",
    function: (
      a: Building | CampusEvent | Lot,
      b: Building | CampusEvent | Lot
    ): number => {
      if (a.hours?.open.isBefore(b.hours?.open)) return 1;
      if (b.hours?.open.isBefore(a.hours?.open)) return -1;
      return 0;
    },
  },
};
