import React from "react";
import {
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { ModalHeader, NavigationButton } from "../../";
import { Item } from "../../../Reuseable";

interface ParkingLotModalProps {
  parkingLot: Item;
  closeAction: () => void;
  setPosition?: (c: L.LatLng, z?: number) => void;
  viewItem: (i: Item) => void;
}

export const ParkingLotModal: React.FC<ParkingLotModalProps> = (
  props: ParkingLotModalProps
) => {
  return (
    <>
      <ModalHeader close={props.closeAction} title={"Parking Lot Details"} />
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
        {props.setPosition && (
          <IonButton
            disabled={!props.parkingLot.coordinates}
            expand="block"
            color="secondary"
            onClick={() => {
              props.closeAction();
              props.viewItem(props.parkingLot);
            }}
          >
            View on Map
          </IonButton>
        )}
        <NavigationButton navigationItem={props.parkingLot} isPin={false} />
      </IonContent>
    </>
  );
};
