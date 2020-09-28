/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/display-name */
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

class MyModal extends React.Component {
  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Event Details</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => this.props.closeAction()}>
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
  } // IonItems are temporary - Working to import specific array details (host, description)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line react/display-name
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ closeAction }: { closeAction: Function }) => (
  <MyModal closeAction={closeAction}></MyModal>
);
