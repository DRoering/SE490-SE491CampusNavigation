import { Strings, get } from "..";
import { useEffect, useState } from "react";
import moment, { Moment } from "moment";
import L from "leaflet";
import { Item } from "../../Reuseable";

interface ApiResponse {
  id: string;
  fields: Item;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getOpenTimes = (i: Item, currentDate: Moment) => ({
  open: moment(
    currentDate.format("MM-DD-YYYY") + " " + i.opening,
    "MM-DD-YYYY hh:mm A"
  ),
  close: moment(
    currentDate.format("MM-DD-YYYY") + " " + i.closing,
    "MM-DD-YYYY hh:mm A"
  ),
});

const getIsOpen = (
  hours: { open: Moment; close: Moment },
  currentDate: Moment
) => currentDate.isBetween(hours.open, hours.close);

const getBuildings = (setBuildings: (b: Item[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Buildings/`, { api_key: apiKey })
    .then((response) => {
      console.log("Api Response: ", response);
      const rawItems: Item[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;
        const currentDate = moment();

        record.fields.hours = getOpenTimes(record.fields, currentDate);
        record.fields.isOpen = getIsOpen(record.fields.hours, currentDate);

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);

        rawItems.push({
          ...record.fields,
          isOrg: false,
          isBuilding: true,
          isEvent: false,
          isParking: false,
        });
      });

      // rawItems.sort((a: Building, b: Building) => {
      //   if (a.id < b.id) return -1;
      //   return 1;
      // });

      console.log(rawItems);
      setBuildings(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useBuilding = (): Item[] => {
  const [buildings, setBuildings] = useState<Item[]>([]);

  useEffect(() => {
    getBuildings(setBuildings);
    console.log("useBuilding effect called");
  }, []);

  return buildings;
};
