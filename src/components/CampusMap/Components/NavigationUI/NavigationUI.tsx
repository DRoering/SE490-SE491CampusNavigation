//start of modal creation
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
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";

interface NavigationUIPopup {
  placeroute: Route;
  closeAction: () => void;
  startNavigation: () => void;
}

export const NavigationUIModal: React.FC<NavigationUIPopup> = (
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
      <IonContent className="ion-padding">
        <IonItem>{props.placeroute.type}</IonItem>
      </IonContent>
    </>
  );
};
