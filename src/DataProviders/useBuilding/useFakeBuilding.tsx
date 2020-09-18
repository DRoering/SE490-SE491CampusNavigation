import moment, { Moment } from "moment";
import { Building, ParkingLot } from "./Building";

const buildings: Building[] = [];

const getServices = (): string[] => {
  const services: string[] = [];

  for (let i = 0; i < 3; i++) {
    services.push(`service ${1}`);
  }

  return services;
};

const getLot = (): ParkingLot => {
  return {
    Type: "LotType",
    Designation: "lotDesignation",
    Permit: true,
    Hours: moment(),
  };
};

const getHours = (): Moment => {
  return moment();
};

for (let i = 0; i < 15; i++) {
  buildings.push({
    id: i,
    Name: `Long Building Name ${i}`,
    Abbreviation: `AA${i}`,
    Services: getServices(),
    NearestLot: getLot(),
    Hours: getHours(),
  });
}

export const useFakeBuilding = (): Building[] => {
  return buildings;
};
