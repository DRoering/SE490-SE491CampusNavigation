import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { BuildingList } from "../../components/BuildingList";
import { Building } from "../../DataProviders";

interface BuildingsProps {
  buildings: Building[];
}

export const Buildings: React.FC<BuildingsProps> = (props: BuildingsProps) => {
  return (
    <IonPage>
      <IonContent>
        <BuildingList buildings={props.buildings} />
      </IonContent>
    </IonPage>
  );
};
