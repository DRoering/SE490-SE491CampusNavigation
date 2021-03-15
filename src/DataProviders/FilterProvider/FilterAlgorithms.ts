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
      if (
        currentDate.isAfter(a.hours?.open) &&
        currentDate.isBefore(a.hours?.close)
      )
        return true;
      return false;
    },
  },
};
