import { useState, useEffect } from "react";
import { Strings } from "..";
import { get } from "../HTTPProvider";
import { Lot } from ".";
import { Moment } from "moment";
import L from "leaflet";

interface ApiResponse {
  id: string;
  fields: Lot;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getParkingLots = (setParkingLots: (l: Lot[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Parking%20Lots/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log(response);
      const rawItems: Lot[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        rawItems.push(record.fields);
      });

      // console.log("Response: ", data);
      setParkingLots(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useParkingLot = (): Lot[] => {
  const [parkingLots, setParkingLots] = useState<Lot[]>([]);

  useEffect(() => {
    getParkingLots(setParkingLots);
  }, []);

  return parkingLots;
};
