import { Strings, get } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import { BuildingFloor } from "./BuildingFloor";
import L from "leaflet";

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
        if (
          record.fields.floors &&
          record.fields.floorimages.length > 0 &&
          record.fields.floorimages[0].url &&
          record.fields.mainfloorposition
        ) {
          const topBound = L.latLng([
            record.fields.topLat,
            record.fields.topLong,
          ]);
          const bottomBound = L.latLng([
            record.fields.bottomLat,
            record.fields.bottomLong,
          ]);
          record.fields.bounds = L.latLngBounds([topBound, bottomBound]);
          rawItems.push(record.fields);
        }
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

  console.log(buildingFloors);

  return buildingFloors;
};
