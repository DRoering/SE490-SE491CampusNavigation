import { IonButton } from "@ionic/react";
import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import {
  briefcase,
  business,
  calendar,
  car,
  chevronDown,
  funnel,
} from "ionicons/icons";

export const SortMenu: React.FC = () => {
  return (
    <IonFab horizontal="end" vertical="top" slot="fixed">
      <IonFabButton color="dark">
        <IonIcon icon={funnel} />
      </IonFabButton>
    </IonFab>
  );
};
