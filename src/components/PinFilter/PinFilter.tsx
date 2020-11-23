import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { business, calendar, car, chevronDown } from "ionicons/icons";

interface PinFilterProps {
  showBuildings: () => void;
  showEvents: () => void;
  showParking: () => void;
}

export const PinFilter: React.FC<PinFilterProps> = (props: PinFilterProps) => (
  <IonFab horizontal="end" vertical="top" slot="fixed">
    <IonFabButton color="dark">
      <IonIcon icon={chevronDown} />
    </IonFabButton>
    <IonFabList side="bottom">
      <IonFabButton onClick={props.showBuildings}>
        <IonIcon icon={business} />
      </IonFabButton>
      <IonFabButton onClick={props.showEvents}>
        <IonIcon icon={calendar} />
      </IonFabButton>
      <IonFabButton onClick={props.showParking}>
        <IonIcon icon={car} />
      </IonFabButton>
    </IonFabList>
  </IonFab>
);
