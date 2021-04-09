import { Strings, get } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import { BuildingFloors } from "./BuildingFloors";

interface ApiResponse {
  id: string;
  fields: BuildingFloors;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getBuildingFloors = (
  setBuildingFloors: (s: BuildingFloors[]) => void
) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}BuildingFloors/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log("Api Response: ", response);
      const rawItems: BuildingFloors[] = [];

      response.data.records.forEach((record) => {
        rawItems.push(record.fields);
      });
      setBuildingFloors(rawItems);
      console.log(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useFloorOverlay = (): BuildingFloors[] => {
  const [buildingFloors, setBuildingFloors] = useState<BuildingFloors[]>([]);
  useEffect(() => {
    getBuildingFloors(setBuildingFloors);

    console.log("useFloorOverlay effect called");
  }, []);
  return buildingFloors;
};
