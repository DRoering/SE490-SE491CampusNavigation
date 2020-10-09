import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";
import { Building } from "../../DataProviders";
import { ParkingLot } from "../../DataProviders/useParkingLot";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: ParkingLot[];
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  return (
    <IonPage>
      <IonContent>
        <MapContent
          buildings={props.buildings}
          showName={props.showName}
          parkingLots={props.parkingLots}
        />
      </IonContent>
    </IonPage>
  );
};
