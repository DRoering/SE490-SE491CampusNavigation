import { useState, useEffect } from "react";
import { Strings } from "..";
import { get } from "../HTTPProvider";
import { Lot } from ".";

const { apiUrl, apiKey } = Strings;
const [error, setError] = useState(false);

const getParkingLots = (setParkingLots: (l: Lot[]) => void) => {
  get<Lot[]>(`${apiUrl}Parking%20Lots`, { apiKey })
    .then((response) => {
      console.log(response);
      const data = response.data;

      setParkingLots(data);
    })
    .catch((error) => setError(error));
  console.log(error);
};

export const useParkingLot = (): Lot[] => {
  const [parkingLots, setParkingLots] = useState<Lot[]>([]);

  useEffect(() => {
    getParkingLots(setParkingLots);
  }, [parkingLots]);

  return parkingLots;
};
