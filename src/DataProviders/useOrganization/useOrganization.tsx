import moment from "moment";
import { Organization } from "./Organization";
import { Strings } from "..";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";
import { get } from "../HTTPProvider";
import { BuildingList } from "../../components";

interface ApiResponse {
  id: string;
  fields: Organization;
  createdTime: Moment | string;
}
const organization: Organization[] = [];

enum Bounds {
  minLat = 45.543198,
  minLong = -94.161335,
  maxLat = 45.561067,
  maxLong = -94.144391,
}

const getLat = () => {
  return Math.random() * (Bounds.maxLat - Bounds.minLat) + Bounds.minLat;
};

const getLong = () => {
  return Math.random() * (Bounds.maxLong - Bounds.minLong) + Bounds.minLong;
};

const getLocation = (): L.LatLng => {
  return L.latLng([getLat(), getLong()]);
};
const { apiUrl, apiKey } = Strings;

const getOrganizations = (setOrganizations: (e: Organization[]) => void) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}Organizations/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log("Response from API: ", response);
      const organizationData: Organization[] = [];

      response.data.records.forEach((record) => {
        const lat = record.fields.latitude;
        const lon = record.fields.longitude;

        if (lat && lon) record.fields.coordinates = L.latLng([lat, lon]);
        organizationData.push(record.fields);
      });

      console.log(organizationData);
      setOrganizations(organizationData);
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
//for (let i = 1; i <= 12; i++) {
//  organization.push({
//    id: i,
//    name: `${i}`,
//    officers: "officerName",
//    meetingTime: moment(),
//   communication: "communicationtype",
//    application: "fillAplication",
//    coordinates: getLocation(),
//    latitude: getLat(),
//    longitude: getLong(),
// });
//}
