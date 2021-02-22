import React, { useMemo } from "react";
import "./ParkingLotPin.scss";
import { Building, CampusEvent, Lot } from "../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonButton, IonLabel } from "@ionic/react";

interface ParkingLotPinProps {
  parkingLots: Lot[];
  openDetails: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
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
              <IonButton
                expand="block"
                onClick={() =>
                  props.openDetails({
                    b: undefined,
                    e: undefined,
                    p: parkingLot,
                  })
                }
              >
                <IonLabel>Open Details</IonLabel>
              </IonButton>
              <IonButton
                expand="block"
                onClick={() =>
                  console.log(
                    "Navigate to : " +
                      parkingLot.name +
                      " " +
                      parkingLot.coordinates
                  )
                }
              >
                <IonLabel>Navigate Here</IonLabel>
              </IonButton>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
