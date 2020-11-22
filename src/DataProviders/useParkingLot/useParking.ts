import { useState, useEffect } from "react";
import { Strings } from "..";
import { get } from "../HTTPProvider";
import { Lot } from ".";

const { apiUrl, apiKey } = Strings;

const getParkingLots = (setParkingLots: (l: Lot[]) => void) => {
  get(`${apiUrl}Parking%20Lots/`, {
    api_key: apiKey,
  })
    .then((response) => {
      console.log(response);
      const data: Lot[] = [];
      setParkingLots(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useParkingLot = (): Lot[] => {
  const [parkingLots, setParkingLots] = useState<Lot[]>([]);

  useEffect(() => {
    getParkingLots(setParkingLots);
  }, []);

  return parkingLots;
};
