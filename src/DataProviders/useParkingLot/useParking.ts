import { useState, useEffect } from "react";
import { Strings, get } from "..";
import { Moment } from "moment";
import L from "leaflet";
import { Item } from "../../Reuseable";

interface ApiResponse {
  id: string;
  fields: Item;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getParkingLots = (setParkingLots: (l: Item[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Parking%20Lots/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log(response);
      const rawItems: Item[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);

        rawItems.sort((a: Item, b: Item) => {
          if (a.id < b.id) return -1;
          return 1;
        });

        rawItems.push(record.fields);
      });

      // console.log("Response: ", data);
      setParkingLots(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useParkingLot = (): Item[] => {
  const [parkingLots, setParkingLots] = useState<Item[]>([]);

  useEffect(() => {
    getParkingLots(setParkingLots);
  }, []);

  return parkingLots;
};
