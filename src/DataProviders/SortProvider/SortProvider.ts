import { useStorageItem } from "@ionic/react-hooks/storage";
import { useCallback, useMemo } from "react";
import { SortType, SortAlgorithms } from "./";

export const useSortSettings = (): [
  string | undefined,
  (u?: string) => void,
  SortType
] => {
  const [sort, setSort] = useStorageItem("sort", "alpha");
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
    return SortAlgorithms.Alphabetical;
  }, [sort]);

  return [sort, updateSort, useSort];
};
