import L from "leaflet";
import moment from "moment";
import { Building, CampusEvent, Lot, Organization } from "..";

export interface BuildingFilter {
  type: string;
  function: (a: Building) => boolean;
}

export interface OrganizationFilter {
  type: string;
  function: (o: Organization) => boolean;
}

export const BuildingFilters = {
  Open: {
    type: "Open",
    function: (a: Building): boolean => {
      const currentDate = moment();

      return currentDate.isBetween(a.hours?.open, a.hours?.close);
    },
  },
};

export const OrganizationFilters = {
  Category: {
    type: "Category",
    function: (o: Organization): boolean => {
      return o.category?.includes("student organization");
    },
  },
};
