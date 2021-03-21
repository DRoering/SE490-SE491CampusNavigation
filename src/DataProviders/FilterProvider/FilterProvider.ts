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

export const useEventFilter = (): [
  string,
  (u?: string) => void,
  FilterType
] => {
  const [filter, setFilter] = useStorageItem("EventFilter", "");
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

export const useParkingFilter = (): [
  string,
  (u?: string) => void,
  FilterType
] => {
  const [filter, setFilter] = useStorageItem("ParkingLotFilter", "Open");
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

export const useOrganizationFilter = (): [
  boolean,
  (u?: boolean) => false,
  FilterType
] => {
  const [filter, setFilter] = useStorageItem("Organization", false);
  const updateFilter = useCallback(
    (s) => {
      console.log("s: " + s);
      setFilter(s);
    },
    [setFilter]
  );

  const useFilter = useMemo<FilterType>(() => {
    return FilterAlgorithms.Category;
  }, [filter]);

  return [filter!, updateFilter, useFilter];
};
