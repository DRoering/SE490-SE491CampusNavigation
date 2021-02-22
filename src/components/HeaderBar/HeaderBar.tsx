import React from "react";
import { IonButton, IonHeader, IonIcon, IonToolbar } from "@ionic/react";
import { Strings } from "../../DataProviders";
import "./HeaderBar.scss";
import { menu } from "ionicons/icons";

interface HeaderBarProps {
  openMenu?: { open: (s: boolean) => void; currentState: boolean };
}

export const HeaderBar: React.FC<HeaderBarProps> = (props: HeaderBarProps) => (
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
      {props.openMenu && (
        <IonButton
          slot="end"
          onClick={() => props.openMenu?.open(!props.openMenu.currentState)}
        >
          <IonIcon icon={menu} />
        </IonButton>
      )}
    </IonToolbar>
  </IonHeader>
);
