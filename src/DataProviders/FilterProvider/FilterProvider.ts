import { useStorageItem } from "@ionic/react-hooks/storage";
import { useCallback, useMemo } from "react";
import { FilterType, FilterAlgorithms } from "./";

export const useBuildingFilter = (): [
  string,
  (u?: string) => void,
  FilterType
] => {
  const [filter, setFilter] = useStorageItem("BuildingFilter", "Open");
  const updateFilter = useCallback(
    (s) => {
      console.log("s: " + s);
      setFilter(s);
    },
    [setFilter]
  );

  const useFilter = useMemo<FilterType>(() => {
    return FilterAlgorithms.Open;
  }, [filter]);

  return [filter!, updateFilter, useFilter];
};
