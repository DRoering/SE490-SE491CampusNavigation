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
import { BuildingFloor } from "../../DataProviders";
import { Item } from "../../Reuseable";

interface FloorViewProps {
  building: Item;
  floors: BuildingFloor;
}

export const FloorView: React.FC<FloorViewProps> = (props: FloorViewProps) => {
  const [currentFloor, setCurrentFloor] = useState(
    props.floors.mainfloorposition
  );

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
            <IonImg src={props.floors.floorimages[currentFloor].url} />
            <IonButton
              onClick={() => setCurrentFloor(currentFloor + 1)}
              disabled={currentFloor === props.floors.floorimages.length}
            >
              <IonLabel>Up a floor</IonLabel>
            </IonButton>
            <IonButton
              onClick={() => setCurrentFloor(currentFloor - 1)}
              disabled={currentFloor === 0}
            >
              <IonLabel>Down a floor</IonLabel>
            </IonButton>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};
