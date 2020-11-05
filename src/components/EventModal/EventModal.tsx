import React from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";

interface EventModalProps {
  closeAction: () => void;
}

export const EventModal: React.FC<EventModalProps> = (
  props: EventModalProps
) => {
  return (
    <>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Event Details</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.closeAction()}>
              <IonIcon name="Close" slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>Description: Test Description</IonItem>
        <IonItem>Host: SCSU</IonItem>
      </IonContent>
    </>
  );
}; // IonItems are temporary - Working to import specific array details (host, description)
