import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import { CampusEvent } from "../../../DataProviders";
import { ModalHeader } from "../..";
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
          <IonItem>
            <IonLabel>Description: {props.event.description}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Host: {props.event.host}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
