import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ParkingLotList } from "../../components";
import { Lot } from "../../DataProviders";

interface ParkingLotProps {
  parkingLots: Lot[];
}

export const ParkingLots: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  return (
    <IonPage>
      <IonContent>
        <ParkingLotList parkingLots={props.parkingLots} />
      </IonContent>
    </IonPage>
  );
};
