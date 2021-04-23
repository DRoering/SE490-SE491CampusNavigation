import { Item } from "../../Reuseable";

export interface SearchBy {
  items: Item[];
}

export const Search = {
  searchItems(e: Item[], criteria: string): Item[] {
    const searchedItems: Item[] = [];
    //const testSearch = "Hall";
    e.forEach((item) => {
      if (
        item.name.toLowerCase().includes(criteria.toLowerCase()) ||
        item.abbreviation?.toLowerCase().includes(criteria.toLowerCase()) ||
        item.type?.toLowerCase().includes(criteria.toLowerCase())
      )
        searchedItems.push(item);
    });
    return searchedItems;
  },
};
