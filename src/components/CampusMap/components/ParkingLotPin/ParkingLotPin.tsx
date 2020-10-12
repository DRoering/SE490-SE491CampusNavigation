import React from "react";
import "./ParkingLotPin.scss";
import { ParkingLot } from "../../../../DataProviders/useParkingLot";
import { Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import { IonLabel } from "@ionic/react";

interface ParkingLotPinProps {
  parkingLots: ParkingLot[];
}

export const ParkingLotPin: React.FC<ParkingLotPinProps> = (
  props: ParkingLotPinProps
) => {
  const parkingLotIcon = L.icon({
    iconUrl: "assets/mapIcons/car-outline.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {props.parkingLots.map((parkingLot) => (
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
