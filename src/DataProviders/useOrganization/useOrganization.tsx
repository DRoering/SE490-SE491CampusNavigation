import { Strings, get } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";
import { Item } from "../../Reuseable";

interface ApiResponse {
  id: string;
  fields: Item;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getOrganizations = (setOrganizations: (e: Item[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Organizations/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log("Response from API: ", response);
      const orgData: Item[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        orgData.push(record.fields);
      });

      orgData.sort((a: Item, b: Item) => {
        if (a.id < b.id) return -1;
        return 1;
      });

      console.log(orgData);
      setOrganizations(orgData);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useOrganization = (): Item[] => {
  const [organizations, setOrganization] = useState<Item[]>([]);

  useEffect(() => {
    getOrganizations(setOrganization);
  }, []);

  return organizations;
};
