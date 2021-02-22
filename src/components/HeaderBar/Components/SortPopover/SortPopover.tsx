import React from "react";
import { IonButton } from "@ionic/react";

export const SortPopover: React.FC = () => {
  return (
    <>
      <IonButton color="light" expand="full">
        Alphabetical
      </IonButton>
      <IonButton color="light" expand="full">
        Date
      </IonButton>
      <IonButton color="light" expand="full">
        Distance
      </IonButton>
    </>
  );
};
