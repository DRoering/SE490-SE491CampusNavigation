import { useStorageItem } from "@ionic/react-hooks/storage";
import { useCallback, useMemo } from "react";
import {
  BuildingFilter,
  BuildingFilters,
  OrganizationFilter,
  OrganizationFilters,
} from "./";

export const useBuildingFilter = (): [
  string,
  (u?: string) => void,
  BuildingFilter | OrganizationFilter
] => {
  const [filter, setFilter] = useStorageItem("Filter", "Buildings");
  const updateFilter = useCallback(
    (s) => {
      console.log("s: " + s);
      setFilter(s);
    },
    [setFilter]
  );

  const getFilter = useMemo<BuildingFilter | OrganizationFilter>(() => {
    if (filter?.includes("Organizations")) return OrganizationFilters.Category;
    return BuildingFilters.Open;
  }, [filter]);

  return [filter!, updateFilter, getFilter];
};
