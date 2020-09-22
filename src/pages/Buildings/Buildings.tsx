import { IonPage } from "@ionic/react";
import React from "react";
import { BuildingList } from "../../components/BuildingList";
import { useFakeBuilding } from "../../DataProviders";

export const Buildings: React.FC = () => {
  const buildings = useFakeBuilding();

  return (
    <IonPage>
      <BuildingList buildings={buildings} />
    </IonPage>
  );
};
