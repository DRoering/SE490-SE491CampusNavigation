import { get } from "../HTTPProvider";
import { Building } from "./Building";
import { Strings } from "../";
import { useEffect, useState } from "react";

const { apiUrl, apiKey } = Strings;

const getBuildings = (setBuildings: (b: Building[]) => void) => {
  get<Building[]>(`${apiUrl}Buildings/`, { apiKey })
    .then((response) => {
      console.log("Api Response: ", response);
      const rawItems = response.data;

      setBuildings(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useBuilding = (): Building[] => {
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    getBuildings(setBuildings);
  }, [buildings]);

  return buildings;
};
