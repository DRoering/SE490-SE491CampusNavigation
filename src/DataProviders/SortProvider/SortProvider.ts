import { useStorageItem } from "@ionic/react-hooks/storage";
import { useCallback, useMemo } from "react";
import { SortType, SortAlgorithms } from "./";

const defaultSort = "Alpha";

export const useBuildingSort = (): [string, (u?: string) => void, SortType] => {
  const [sort, setSort] = useStorageItem("BuildingSort", defaultSort);
  const updateSort = useCallback(
    (s) => {
      console.log("s: " + s);
      setSort(s);
    },
    [setSort]
  );

  const useSort = useMemo<SortType>(() => {
    if (sort && SortAlgorithms.Distance.type.includes(sort))
      return SortAlgorithms.Distance;
    if (sort && SortAlgorithms.Date.type.includes(sort))
      return SortAlgorithms.Date;
    return SortAlgorithms.Alphabetical;
  }, [sort]);

  return [sort || defaultSort, updateSort, useSort];
};

export const useEventSort = (): [string, (u?: string) => void, SortType] => {
  const [sort, setSort] = useStorageItem("EventSort", "Date");
  const updateSort = useCallback(
    (s) => {
      console.log("s: " + s);
      setSort(s);
    },
    [setSort]
  );

  const useSort = useMemo<SortType>(() => {
    if (sort && SortAlgorithms.Distance.type.includes(sort))
      return SortAlgorithms.Distance;
    if (sort && SortAlgorithms.Date.type.includes(sort))
      return SortAlgorithms.Date;
    return SortAlgorithms.Alphabetical;
  }, [sort]);

  return [sort || defaultSort, updateSort, useSort];
};

export const useLotSort = (): [string, (u?: string) => void, SortType] => {
  const [sort, setSort] = useStorageItem("LotSort", "Distance");
  const updateSort = useCallback(
    (s) => {
      console.log("s: " + s);
      setSort(s);
    },
    [setSort]
  );

  const useSort = useMemo<SortType>(() => {
    if (sort && SortAlgorithms.Distance.type.includes(sort))
      return SortAlgorithms.Distance;
    if (sort && SortAlgorithms.Date.type.includes(sort))
      return SortAlgorithms.Date;
    return SortAlgorithms.Alphabetical;
  }, [sort]);

  return [sort || defaultSort, updateSort, useSort];
};

export const useOrgSort = (): [string, (u?: string) => void, SortType] => {
  const [sort, setSort] = useStorageItem("OrgSort", "Distance");
  const updateSort = useCallback(
    (s) => {
      console.log("s: " + s);
      setSort(s);
    },
    [setSort]
  );

  const useSort = useMemo<SortType>(() => {
    if (sort && SortAlgorithms.Distance.type.includes(sort))
      return SortAlgorithms.Distance;
    if (sort && SortAlgorithms.Date.type.includes(sort))
      return SortAlgorithms.Date;
    return SortAlgorithms.Alphabetical;
  }, [sort]);

  return [sort || defaultSort, updateSort, useSort];
};
