import React from "react";
import { Lot } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";

interface ParkingLotProps {
  parkingLots: Lot[];
  clickEvent: () => void;
}

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <IonList>
      {props.parkingLots.map((parkingLots) => (
        <IonCard key={parkingLots.id} onClick={() => props.clickEvent()}>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="8">
                  <IonLabel>{parkingLots.name}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>{parkingLots.designation}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
