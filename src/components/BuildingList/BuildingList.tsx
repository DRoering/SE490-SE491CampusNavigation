import React from "react";
import { Building } from "../../DataProviders";
import { IonCard, IonCardContent, IonLabel, IonList } from "@ionic/react";

interface BuildingListProps {
  buildings: Building[];
}

export const BuildingList: React.FC<BuildingListProps> = (
  props: BuildingListProps
) => {
  return (
    <IonList>
      {props.buildings.map((building) => (
        <IonCard key={building.id}>
          <IonCardContent>
            <IonLabel>{building.Name}</IonLabel>
            <IonLabel>{building.Abbreviation}</IonLabel>
            <IonLabel>{building.Services}</IonLabel>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
