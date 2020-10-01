import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import React from "react";
import { Building } from "../../DataProviders";

interface BuildingModalProps {
  building: Building;
  close: () => void;
}

export const BuildingModal: React.FC<BuildingModalProps> = (
  props: BuildingModalProps
) => {
  return (
    <>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={props.close}>
            <IonIcon icon={closeCircle} slot="icon-only" />
          </IonButton>
        </IonButtons>
        <IonTitle>{props.building.name}</IonTitle>
      </IonToolbar>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>{props.building.abbreviation}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
