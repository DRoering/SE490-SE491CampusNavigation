//start of modal creation
import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";

interface NavigationUIPopup {
  closeAction: () => void;
  startNavigation: () => void;
}

export const NavigationUI: React.FC<NavigationUIPopup> = (
  props: NavigationUIPopup
) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>User Navigation</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.closeAction()}>
              <IonIcon name="Close" slot="icon-only"></IonIcon>
            </IonButton>
            <IonButton onClick={() => props.startNavigation()}>
              <IonIcon name="Start" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </>
  );
};
