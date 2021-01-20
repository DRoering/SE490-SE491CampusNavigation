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

interface BuildingSortModalProps {
  close: () => void;
}

export const SortBuildingModal: React.FC<BuildingSortModalProps> = (
  props: BuildingSortModalProps
) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Parking Lot Details</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon name="Close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};
