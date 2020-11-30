import React from "react";
import { Building } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";

interface BuildingListProps {
  buildings: Building[];
  openDetails: (d: Building) => void;
}

export const BuildingList: React.FC<BuildingListProps> = (
  props: BuildingListProps
) => {
  return (
    <IonGrid>
      <IonRow>
        {props.buildings.map((building) => (
          <IonCol key={building.id} size="4" sizeXs="6">
            <IonCard onClick={() => props.openDetails(building)}>
              <img
                ion-img-cache="true"
                src={building.imgUrl}
                alt={building.name}
              />
              <IonCardContent>
                <IonLabel>{`${building.name} (${building.abbreviation})`}</IonLabel>
                <IonLabel>{building.services}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
