import L from "leaflet";
import moment from "moment";
import { Organization } from "./Organization";

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

for (let i = 1; i <= 12; i++) {
  organization.push({
    id: i,
    name: `Organization Name ${i}`,
    officers: "officerName",
    meetingTime: moment(),
    communication: "communicationtype",
    application: "fillAplication",
    coordinates: getLocation(),
    latitude: getLat(),
    longitude: getLong(),
  });
}
export const useFakeOrganization = (): Organization[] => {
  return organization;
};
