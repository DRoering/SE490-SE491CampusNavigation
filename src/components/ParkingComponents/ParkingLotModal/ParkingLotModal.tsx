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
  IonItemDivider,
  IonLabel,
} from "@ionic/react";
import { Lot } from "../../../DataProviders";
import { ModalHeader } from "../../ModalHeader";

interface ParkingLotProps {
  parkingLot: Lot;
  closeAction: () => void;
}

export const ParkingLotModal: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <>
      <ModalHeader
        close={props.closeAction}
        title={"Parking Lot Details"}
      ></ModalHeader>
      <IonContent className="app-fonts" id="item-info">
        <IonItemDivider className="app-fonts" id="item-info">
          <IonLabel id="title">Lot Name</IonLabel>
        </IonItemDivider>
        <IonItem>{props.parkingLot.designation}</IonItem>
        <IonItemDivider className="app-fonts" id="item-info">
          <IonLabel id="title">Lot Type</IonLabel>
        </IonItemDivider>
        <IonItem>{props.parkingLot.type}</IonItem>
        <IonItemDivider className="app-fonts" id="item-info">
          <IonLabel id="title">Pay Rate</IonLabel>
        </IonItemDivider>
        <IonItem className="ion-text-wrap" id="item-info">
          {props.parkingLot.rate}
        </IonItem>
      </IonContent>
    </>
  );
};
