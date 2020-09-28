import React from "react";
import { Building } from "../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";

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
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonLabel>
                    {`${building.name} (${building.abbreviation})`}
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>{building.services}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
