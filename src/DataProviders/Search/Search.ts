import { Item } from "../../Reuseable";

export interface SearchBy {
  items: Item[];
}

export const Search = {
  searchItems(e: Item[]): Item[] {
    const searchedItems: Item[] = [];
    const testSearch = "Hall";
    e.forEach((item) => {
      if (item.name.includes(testSearch)) searchedItems.push(item);
    });
    return searchedItems;
  },
};
