import { IonContent, IonItem, IonList } from "@ionic/react";
import { CampusEvent } from "../../DataProviders";
import { ModalHeader } from "../";
import React from "react";

interface EventModalProps {
  event: CampusEvent;
  closeAction: () => void;
}

export const EventModal: React.FC<EventModalProps> = (
  props: EventModalProps
) => {
  return (
    <>
      <ModalHeader close={props.closeAction} title="Event Details" />
      <IonContent>
        <IonList>
          <IonItem>Description: Test Description</IonItem>
          <IonItem>Host: SCSU</IonItem>
        </IonList>
      </IonContent>
    </>
  );
}; // IonItems are temporary - Working to import specific array details (host, description)
