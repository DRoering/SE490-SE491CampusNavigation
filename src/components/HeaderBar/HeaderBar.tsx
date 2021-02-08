import React from "react";
import { IonHeader, IonToolbar } from "@ionic/react";
import { Strings } from "../../DataProviders";
import "./HeaderBar.scss";
import { SortMenu } from "./Components";

interface HeaderBarProps {
  sortObject?: {
    sortOptions: string[];
    currentSort: string;
    updateSort: (u?: string) => void;
  };
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
      {props.sortObject && (
        <SortMenu
          sortOptions={props.sortObject.sortOptions}
          currentSort={props.sortObject.currentSort}
          updateSort={props.sortObject.updateSort}
        />
      )}
    </IonToolbar>
  </IonHeader>
);
