import React, { useState } from "react";
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import { Strings } from "../../DataProviders";
import "./HeaderBar.scss";
import { menu } from "ionicons/icons";

interface HeaderBarProps {
  displayButton: boolean;
  displaySearch: boolean;
  searchText: string;
  setSearchText: (s: string) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = (props: HeaderBarProps) => {
  const [hideIcons, setHideIcons] = useState(false);

  return (
    <IonHeader>
      <IonToolbar id="header-bar" color="primary">
        {!hideIcons && (
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
        )}
        {props.setSearchText && (
          <IonSearchbar
            id="search-bar"
            onIonFocus={() => setHideIcons(true)}
            onIonBlur={() => setHideIcons(false)}
            value={props.searchText}
            inputMode="text"
            onIonChange={(e) => props.setSearchText(e.detail.value || "")}
            debounce={500}
          />
        )}
        {props.displayButton && !hideIcons && (
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
};
