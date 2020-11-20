import React from "react";
import { IonHeader, IonToolbar } from "@ionic/react";
import "./HeaderBar.scss";

export const HeaderBar: React.FC = () => (
  <IonHeader>
    <IonToolbar color="primary">
      <img
        id="scsu-logo"
        src="assets/images/scsu_logo.png"
        alt="SCSU Logo"
        slot="start"
      />
    </IonToolbar>
  </IonHeader>
);
