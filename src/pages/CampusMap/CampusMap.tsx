import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";
import { Building } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  return (
    <IonPage>
      <IonContent>
        <MapContent buildings={props.buildings} showName={props.showName} />
      </IonContent>
    </IonPage>
  );
};
