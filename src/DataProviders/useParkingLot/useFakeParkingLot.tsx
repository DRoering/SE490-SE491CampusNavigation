import moment, { Moment } from "moment";
import { ParkingLot, Building, StudentLot } from "./Parking";

const parkingLots: ParkingLot[] = [];

const getBuilding = (): Building => {
  return {
    id: 1,
    Abbreviation: "",
    Name: "",
    Services: "",
    Hours: moment(),
  };
};

const getHours = (): Moment => {
  return moment();
};

const getLotType = (): string => {
  const Types: string[] = [];
  let lotType: string = Types[0];

  for (let i = 0; i < 6; i++) {
    Types.push();
    if (Types[i] === lotType) {
      lotType = Types[i];
    }
  }
  return lotType;
};

const getRate = (): number[] => {
  const LotRates: number[] = [];
  const rate: number[] = [];
  for (let i = 0; i < rate.length; i++) {
    LotRates.push(rate[i]);
  }
  return LotRates;
};

for (let i = 0; i < 15; i++) {
  parkingLots.push({
    Type: getLotType(),
    Designation: "",
    Permit: true,
    Rate: getRate(),
    Hours: getHours(),
  });
}

export const useFakeParking = (): ParkingLot[] => {
  return parkingLots;
};
