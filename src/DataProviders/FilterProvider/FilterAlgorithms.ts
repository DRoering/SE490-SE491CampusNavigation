import L from "leaflet";
import moment from "moment";
import { Item } from "../../Reuseable";

export interface FilterType {
  type: string;
  function: (a: Item) => boolean;
}

export const FilterAlgorithms = {
  Open: {
    type: "Open",
    function: (a: Item): boolean => {
      const currentDate = moment();

      return a.isOpen || currentDate.isBetween(a.hours?.open, a.hours?.close);
    },
  },
};
