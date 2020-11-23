import React, { useMemo } from "react";
import "./ParkingLotPin.scss";
import { Lot } from "../../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonLabel } from "@ionic/react";

interface ParkingLotPinProps {
  parkingLots: Lot[];
}

const filterParkingLots = (parkingLots: Lot[]) => {
  const validParkingLots: Lot[] = [];
  parkingLots.forEach((parkingLot) => {
    if (parkingLot.coordinates) validParkingLots.push(parkingLot);
  });
  console.log(validParkingLots);
  return validParkingLots;
};

export const ParkingLotPin: React.FC<ParkingLotPinProps> = (
  props: ParkingLotPinProps
) => {
  const validParkingLots = useMemo(() => {
    console.log("Parking Lot Pin Memo Called");
    return filterParkingLots(props.parkingLots);
  }, [props.parkingLots]);
  const parkingLotIcon = L.icon({
    iconUrl: "assets/mapIcons/car-outline.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {validParkingLots &&
        validParkingLots.map((parkingLot) => (
          <Marker
            key={parkingLot.id}
            position={parkingLot.coordinates}
            icon={parkingLotIcon}
          >
            <Popup id="parking-lot-popup">
              <IonLabel>{parkingLot.name}</IonLabel>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
