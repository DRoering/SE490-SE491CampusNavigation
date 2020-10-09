import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { ParkingLotList } from "../../components/ParkingLotList/ParkingLotList";
import { ParkingLot } from "../../DataProviders/useParkingLot/index";

interface ParkingLotProps {
  parkingLots: ParkingLot[];
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
