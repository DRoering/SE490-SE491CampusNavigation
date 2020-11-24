import moment from "moment";
import { Organization } from "./Organization";
import { Strings } from "../";
import { useEffect, useState } from "react";
import { Moment } from "moment";
import L from "leaflet";
import { get } from "../HTTPProvider";
import { BuildingList } from "../../components";

const organization: Organization[] = [];

for (let i = 1; i <= 12; i++) {
  organization.push({
    id: i,
    name: `${i}`,
    officers: "officerName",
    meetingTime: moment(),
    communication: "communicationtype",
    application: "fillAplication",
    coordinates: [8754, 790],
  });
}
export const useFakeOrganization = (): Organization[] => {
  return organization;
};
