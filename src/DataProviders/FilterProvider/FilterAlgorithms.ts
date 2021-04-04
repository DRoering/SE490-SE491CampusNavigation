import moment from "moment";
import { Item } from "../../Reuseable";

export interface FilterType {
  type: string;
  function: (o: Item, categories?: string[]) => boolean;
}

export const ItemFilter = {
  BuildingFilters: {
    Open: {
      type: "Open",
      function: (i: Item): boolean => {
        const currentDate = moment();

        return i.isOpen || currentDate.isBetween(i.hours?.open, i.hours?.close);
      },
    },
  },
  EventFilters: {
    Category: {
      type: "Category",
      function: (i: Item): boolean => {
        return i.category?.includes("student organization");
      },
    },
  },
  OrganizationFilters: {
    Category: {
      type: "Category",
      function: (i: Item, categories?: string[]): boolean => {
        let include = false;

        i.category.forEach((category) =>
          categories?.forEach((cat) => {
            if (cat.includes(category)) include = true;
          })
        );
        return include;
      },
    },
  },
};
