import moment, { Moment } from "moment";
import { ParkingLot } from "./Parking";

const parkingLots: ParkingLot[] = [];

const getHours = (): Moment => {
  return moment();
};

const getLotType = (): string => {
  const types: string[] = [];
  let lotType: string = types[0];

  for (let i = 0; i < 6; i++) {
    types.push();
    if (types[i] === lotType) {
      lotType = types[i];
    }
  }
  return lotType;
};

const getRate = (): number[] => {
  const lotRates: number[] = [];
  const rate: number[] = [];
  for (let i = 0; i < rate.length; i++) {
    lotRates.push(rate[i]);
  }
  return lotRates;
};

for (let i = 0; i < 15; i++) {
  parkingLots.push({
    type: getLotType(),
    designation: "",
    permit: true,
    rate: getRate(),
    hours: getHours(),
  });
}

export const useFakeParking = (): ParkingLot[] => {
  return parkingLots;
};
