import L from "leaflet";
import moment from "moment";
import { Building, CampusEvent, Lot, Organization } from "..";

export interface FilterType {
  type: string;
  function: (a: Building) => boolean;
}

export const FilterAlgorithms = {
  Open: {
    type: "Open",
    function: (a: Building): boolean => {
      const currentDate = moment();

      return currentDate.isBetween(a.hours?.open, a.hours?.close);
    },
  },

  Category: {
    type: "Student",
    function: (o: Organization): boolean => {
      const type = o.category;

      if (type.includes("student")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
