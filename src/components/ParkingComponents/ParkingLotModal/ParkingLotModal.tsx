import React from "react";
import { IonContent, IonItem, IonItemDivider, IonLabel } from "@ionic/react";
import { ModalHeader } from "../../ModalHeader";
import { Item } from "../../../Reuseable";

interface ParkingLotProps {
  parkingLot: Item;
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
