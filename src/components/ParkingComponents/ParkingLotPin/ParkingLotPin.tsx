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
import { navigateCircle } from "ionicons/icons";
import { NavigationButton, ShareButton } from "../..";

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
              <IonLabel id="name" class="ion-text-overflow">
                <strong>{parkingLot.name}</strong>
              </IonLabel>
              <IonGrid>
                <IonRow>
                  <IonCol class="ion-no-padding" id="share-col" size="6">
                    <ShareButton
                      class="ion-no-margin"
                      id="share-button-pin"
                      iconId="ion-icon-pin"
                      expand={true}
                      fill={true}
                      shareItem={parkingLot}
                    />
                  </IonCol>
                  <IonCol class="ion-no-padding" id="share-col2" size="6">
                    <NavigationButton
                      navigationItem={parkingLot}
                      isPin={true}
                    />
                  </IonCol>
                </IonRow>
              </IonGrid>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
