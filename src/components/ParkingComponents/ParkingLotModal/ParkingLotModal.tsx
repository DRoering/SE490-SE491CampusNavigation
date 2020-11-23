import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { Lot } from "../../DataProviders";

interface ParkingLotProps {
  parkingLot: Lot[];
  closeAction: () => void;
}

export const ParkingLotModal: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Parking Lot Details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.closeAction()}>
              <IonIcon name="Close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>Student Lot</IonItem>
        <IonItem>Lot A</IonItem>
      </IonContent>
    </>
  );
};
