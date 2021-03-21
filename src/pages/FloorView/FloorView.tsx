import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Building } from "../../DataProviders";

interface FloorViewProps {
  building: Building;
}

export const FloorView: React.FC<FloorViewProps> = (props: FloorViewProps) => {
  const [currentFloor, setCurrentFloor] = useState(1);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonLabel slot="center">{props.building.name}</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {props.building && (
          <>
            <IonButton onClick={() => setCurrentFloor(currentFloor + 1)}>
              <IonLabel>Up a floor</IonLabel>
            </IonButton>
            <IonImg
              src={`assets/floorView/${props.building.abbreviation}_${currentFloor}.png`}
            />
            <IonButton onClick={() => setCurrentFloor(currentFloor - 1)}>
              <IonLabel>Down a floor</IonLabel>
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};
