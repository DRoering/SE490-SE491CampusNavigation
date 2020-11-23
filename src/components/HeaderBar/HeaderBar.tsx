import React from "react";
import { IonHeader, IonToolbar } from "@ionic/react";
import { Strings } from "../../DataProviders";
import "./HeaderBar.scss";

export const HeaderBar: React.FC = () => (
  <IonHeader>
    <IonToolbar color="primary">
      <a href={Strings.scsuUrl} target="_blank" rel="noopener noreferrer">
        <img
          id="scsu-logo"
          src="assets/images/scsu_logo.png"
          alt="SCSU Logo"
          slot="start"
        />
      </a>
    </IonToolbar>
  </IonHeader>
);
