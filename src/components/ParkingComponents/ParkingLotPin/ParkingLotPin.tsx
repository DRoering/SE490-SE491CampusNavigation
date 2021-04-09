import React, { useMemo } from "react";
import "./ParkingLotPin.scss";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Item } from "../../../Reuseable";
import { navigateCircle, share } from "ionicons/icons";

interface ParkingLotPinProps {
  parkingLots: Item[];
}

const filterParkingLots = (parkingLots: Item[]) => {
  const validParkingLots: Item[] = [];
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
              <IonGrid>
                <IonRow>
                  <IonCol class="ion-no-padding" id="share-col" size="6">
                    <IonButton
                      class="ion-no-margin"
                      id="share-button-pin"
                      expand="block"
                    >
                      <IonIcon
                        color="dark"
                        id="ion-icon-pin"
                        icon={share}
                      ></IonIcon>
                    </IonButton>
                  </IonCol>
                  <IonCol class="ion-no-padding" id="share-col2" size="6">
                    <IonButton
                      class="ion-no-margin"
                      id="navigate-button-pin"
                      color="dark"
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
                      <IonIcon
                        icon={navigateCircle}
                        id="ion-icon-pin"
                      ></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
