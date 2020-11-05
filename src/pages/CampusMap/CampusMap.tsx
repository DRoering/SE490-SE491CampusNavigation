import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";
import { Building, Lot, CampusEvent } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  return (
    <IonPage>
      <IonContent>
        <MapContent
          buildings={props.buildings}
          showName={props.showName}
          parkingLots={props.parkingLots}
          events={props.events}
        />
      </IonContent>
    </IonPage>
  );
};
