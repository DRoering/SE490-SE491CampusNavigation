import { useStorageItem } from "@ionic/react-hooks/storage";
import { useCallback, useMemo } from "react";
import { ItemFilter, FilterType } from "./";

export const useBuildingFilter = (): [
  string,
  (u?: string) => void,
  FilterType
] => {
  const [filter, setFilter] = useStorageItem("Filter", "Buildings");
  const updateFilter = useCallback(
    (s) => {
      console.log("s: " + s);
      setFilter(s);
    },
    [setFilter]
  );

  const getFilter = useMemo<FilterType>(() => {
    if (filter?.includes("Organizations"))
      return ItemFilter.OrganizationFilters.Category;
    return ItemFilter.BuildingFilters.Open;
  }, [filter]);

  return [filter || "", updateFilter, getFilter];
};
