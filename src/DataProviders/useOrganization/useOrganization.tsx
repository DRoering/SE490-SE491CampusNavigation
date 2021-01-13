import { Organization, Strings, get } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";

interface ApiResponse {
  id: string;
  fields: Organization;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getOrganizations = (setOrganizations: (e: Organization[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Organizations/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log("Response from API: ", response);
      const orgData: Organization[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        orgData.push(record.fields);
      });

      orgData.sort((a: Organization, b: Organization) => {
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

export const useOrganization = (): Organization[] => {
  const [organizations, setOrganization] = useState<Organization[]>([]);

  useEffect(() => {
    getOrganizations(setOrganization);
  }, []);

  return organizations;
};
