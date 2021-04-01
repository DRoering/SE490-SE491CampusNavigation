import React from "react";
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar,
} from "@ionic/react";
import { Strings } from "../../DataProviders";
import "./HeaderBar.scss";
import { menu } from "ionicons/icons";
import { SearchBar } from "../SearchBar";

interface HeaderBarProps {
  displayButton: boolean;
  displaySearch: boolean;
}

export const HeaderBar: React.FC<HeaderBarProps> = (props: HeaderBarProps) => (
  <IonHeader>
    <IonToolbar color="primary">
      <a
        slot="start"
        href={Strings.scsuUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          id="scsu-logo"
          src="assets/images/scsu_logo.png"
          alt="SCSU Logo"
          slot="start"
        />
      </a>
      {props.displayButton && (
        <div id="options-menu" slot="end">
          <IonButtons>
            <IonMenuButton>
              <IonIcon icon={menu} />
            </IonMenuButton>
          </IonButtons>
        </div>
      )}
    </IonToolbar>
  </IonHeader>
);
