import moment, { Moment } from "moment";
import { ParkingLot } from "..";
import { Organization } from "./Organization";
import L, { Bounds } from "leaflet";
import { useEffect, useState } from "react";
import React from "react";
import { Building } from "../useBuilding";
import { useFakeBuilding } from "../useBuilding/useFakeBuilding";

const organizations: Organization[] = [];

const getOrganization = (): Organization => {
  return {
    Officers: "officerName",
    meetingTime: moment(),
    communication: "communicationtype",
    application: "fillAplication",
    id: 2346,
    name: "orgName",
    coordinates: [8754, 790],
  };
};

for (let i = 1; i <= 15; i++) {
  organizations.push({
    id: i,
    name: `Organization Name ${i}`,
    Officers: "officerName",
    meetingTime: moment(),
    communication: "communicationtype",
    application: "fillAplication",
    coordinates: [8754, 790],
  });
}
export const useFakeOrganization = (): Organization[] => {
  return organizations;
};
