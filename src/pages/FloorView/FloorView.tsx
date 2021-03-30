import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Item } from "../../Reuseable";

interface FloorViewProps {
  building: Item;
}

const maxFloor = 3;
const minFloor = 0;

export const FloorView: React.FC<FloorViewProps> = (props: FloorViewProps) => {
  const [currentFloor, setCurrentFloor] = useState(1);

  const displayNextFloor = () => {
    if (currentFloor !== maxFloor) setCurrentFloor(currentFloor + 1);
  };

  const displayPreviousFloor = () => {
    if (currentFloor !== minFloor) setCurrentFloor(currentFloor - 1);
  };

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
            <IonItem>
              <IonTitle>
                <strong>
                  {props.building.name} floor {currentFloor}
                </strong>
              </IonTitle>
            </IonItem>
            <IonImg
              src={`assets/floorView/${props.building.abbreviation}_${currentFloor}.png`}
            />
            <IonButton
              onClick={displayPreviousFloor}
              disabled={currentFloor === minFloor}
            >
              <IonLabel>Down a floor</IonLabel>
            </IonButton>
            <IonButton
              onClick={displayNextFloor}
              disabled={currentFloor === maxFloor}
            >
              <IonLabel>Up a floor</IonLabel>
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};
