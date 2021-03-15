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

      console.log(currentDate);
      console.log(a.hours?.close);
      console.log(currentDate.isBetween(a.hours?.open, a.hours?.close));

      return currentDate.isBetween(a.hours?.open, a.hours?.close);
    },
  },
};
