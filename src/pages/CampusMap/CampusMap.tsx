import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";
import { Building, Lot } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
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
