import { get } from "../HTTPProvider";
import { CampusEvent } from "./CampusEvent";
import { Strings } from "../";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";

interface ApiResponse {
  id: string;
  fields: CampusEvent;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getEvents = (setEvents: (e: CampusEvent[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Events/`, { api_key: apiKey })
    .then((response) => {
      console.log("Response from API: ", response);
      const eventData: CampusEvent[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        eventData.push(record.fields);
      });

      console.log(eventData);
      setEvents(eventData);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useEvent = (): CampusEvent[] => {
  const [events, setEvents] = useState<CampusEvent[]>([]);

  useEffect(() => {
    getEvents(setEvents);

    console.log("useEvent was called");
  }, []);

  return events;
};
