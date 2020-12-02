import { Strings, get, Building } from "..";
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

        console.log(typeof lat === "number", typeof lon === "number");

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        rawItems.push(record.fields);
      });

      rawItems.sort((a: Building, b: Building) => {
        if (a.id < b.id) return -1;
        return 1;
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

    console.log("useBuilding effect called");
  }, []);

  return buildings;
};
