import { Strings, get } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import { BuildingFloor } from "./BuildingFloor";

interface ApiResponse {
  id: string;
  fields: BuildingFloor;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getBuildingFloors = (setBuildingFloors: (s: BuildingFloor[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}BuildingFloors/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log("Api Response: ", response);
      const rawItems: BuildingFloor[] = [];

      response.data.records.forEach((record) => {
        if (record.fields.floors && record.fields.floorimages.length > 0)
          rawItems.push(record.fields);
      });
      setBuildingFloors(rawItems);
      console.log(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useFloorOverlay = (): BuildingFloor[] => {
  const [buildingFloors, setBuildingFloors] = useState<BuildingFloor[]>([]);
  useEffect(() => {
    getBuildingFloors(setBuildingFloors);

    console.log("useFloorOverlay effect called");
  }, []);
  return buildingFloors;
};
