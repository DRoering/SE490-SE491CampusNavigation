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
    if (filter && FilterAlgorithms.Open.type.includes(filter))
      return FilterAlgorithms.Open;
    //Need new defualt set? Shouldn't have a default filter except 'all'
    return FilterAlgorithms.Open;
  }, [filter]);

  return [filter!, updateFilter, useFilter];
};

// Copied from SortProviders.ts file
// export const useEventSort = (): [string, (u?: string) => void, SortType] => {
//   const [sort, setSort] = useStorageItem("EventSort", "Date");
//   const updateSort = useCallback(
//     (s) => {
//       console.log("s: " + s);
//       setSort(s);
//     },
//     [setSort]
//   );

//   const useSort = useMemo<SortType>(() => {
//     if (sort && SortAlgorithms.Distance.type.includes(sort))
//       return SortAlgorithms.Distance;
//     if (sort && SortAlgorithms.Date.type.includes(sort))
//       return SortAlgorithms.Date;
//     return SortAlgorithms.Alphabetical;
//   }, [sort]);

//   return [sort!, updateSort, useSort];
// };

// export const useLotSort = (): [string, (u?: string) => void, SortType] => {
//   const [sort, setSort] = useStorageItem("LotSort", "Distance");
//   const updateSort = useCallback(
//     (s) => {
//       console.log("s: " + s);
//       setSort(s);
//     },
//     [setSort]
//   );

//   const useSort = useMemo<SortType>(() => {
//     if (sort && SortAlgorithms.Distance.type.includes(sort))
//       return SortAlgorithms.Distance;
//     if (sort && SortAlgorithms.Date.type.includes(sort))
//       return SortAlgorithms.Date;
//     return SortAlgorithms.Alphabetical;
//   }, [sort]);

//   return [sort!, updateSort, useSort];
// };

// export const useOrgSort = (): [string, (u?: string) => void, SortType] => {
//   const [sort, setSort] = useStorageItem("OrgSort", "Distance");
//   const updateSort = useCallback(
//     (s) => {
//       console.log("s: " + s);
//       setSort(s);
//     },
//     [setSort]
//   );

//   const useSort = useMemo<SortType>(() => {
//     if (sort && SortAlgorithms.Distance.type.includes(sort))
//       return SortAlgorithms.Distance;
//     if (sort && SortAlgorithms.Date.type.includes(sort))
//       return SortAlgorithms.Date;
//     return SortAlgorithms.Alphabetical;
//   }, [sort]);

//   return [sort!, updateSort, useSort];
// };
