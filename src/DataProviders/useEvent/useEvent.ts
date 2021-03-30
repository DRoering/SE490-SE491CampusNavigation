import { get } from "../HTTPProvider";
import { Strings } from "../";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";
import moment from "moment";
import { Item } from "../../Reuseable";

interface ApiResponse {
  id: string;
  fields: Item;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getEvents = (setEvents: (e: Item[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Events/`, { api_key: apiKey })
    .then((response) => {
      console.log("Response from API: ", response);
      const eventData: Item[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;
        const sD = record.fields.startDate;
        const eD = record.fields.endDate;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        record.fields.startDate = moment(sD);
        record.fields.endDate = moment(eD);
        record.fields.hours = { open: moment(sD), close: moment(eD) };

        eventData.push(record.fields);
      });

      eventData.sort((a: Item, b: Item) => {
        const aDate = a.startDate;
        const bDate = b.startDate;
        if (aDate.isBefore(bDate)) return -1;
        if (bDate.isBefore(aDate)) return 1;
        return 0;
      });

      console.log(eventData);
      setEvents(eventData);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useEvent = (): Item[] => {
  const [events, setEvents] = useState<Item[]>([]);

  useEffect(() => {
    getEvents(setEvents);

    console.log("useEvent was called");
  }, []);

  return events;
};
