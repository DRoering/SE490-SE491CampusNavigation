import React from "react";
import { Lot } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";

interface ParkingLotProps {
  parkingLots: Lot[];
  openDetails: (p: Lot) => void;
}

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <IonGrid>
      <IonRow>
        {props.parkingLots.map((parkingLots) => (
          <IonCol key={parkingLots.id}>
            <IonCard onClick={() => props.openDetails(parkingLots)}>
              <IonCardContent>
                <IonLabel>{parkingLots.name}</IonLabel>
                <IonLabel>{parkingLots.designation}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
