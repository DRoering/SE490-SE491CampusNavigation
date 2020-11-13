import { get } from "../HTTPProvider";
import { Building } from "./Building";
import { Strings } from "../";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";

interface ApiResponse {
  id: string;
  fields: Building;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getBuildings = (setBuildings: (b: Building[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Buildings/`, { api_key: apiKey })
    .then((response) => {
      console.log("Api Response: ", response);
      const rawItems: Building[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        rawItems.push(record.fields);
      });

      console.log(rawItems);
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
  }, []);

  return buildings;
};
