import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";
import { Building, Lot, CampusEvent, Organization } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
  organizations: Organization[];
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
          organizations={props.organizations}
        />
      </IonContent>
    </IonPage>
  );
};
