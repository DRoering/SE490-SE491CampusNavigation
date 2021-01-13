import React from "react";
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import "./ModalHeader.scss";

interface ModalHeaderProps {
  title?: string;
  close: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = (
  props: ModalHeaderProps
) => {
  return (
    <IonToolbar color="primary" className="tool-bar">
      <IonButtons slot="start">
        <IonButton onClick={props.close}>
          <IonIcon icon={closeCircle} slot="icon-only" />
        </IonButton>
      </IonButtons>
      {props.title && <IonTitle>{props.title}</IonTitle>}
    </IonToolbar>
  );
};
