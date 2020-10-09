import React from "react";
import { ParkingLot } from "../../DataProviders/useParkingLot/index";
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
  parkingLots: ParkingLot[];
}

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <IonList>
      {props.parkingLots.map((parkingLots) => (
        <IonCard key={parkingLots.id}>
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
