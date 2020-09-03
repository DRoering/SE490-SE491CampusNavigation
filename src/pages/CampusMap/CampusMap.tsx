import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { CampusMap as MapContent } from "../../components";

export const CampusMap: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <MapContent />
      </IonContent>
    </IonPage>
  );
};
