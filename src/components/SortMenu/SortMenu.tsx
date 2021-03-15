import React from "react";
import {
  IonMenu,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonList,
  IonItem,
  IonContent,
  IonSplitPane,
  IonToggle,
} from "@ionic/react";

interface SortMenuProps {
  sortOptions: string[];
  currentSort: string;
  filterOptions: string[];
  currentFilter: string;
  updateSort: (u?: string) => void;
  updateFilter: (u?: string) => void;
}

export const SortMenu: React.FC<SortMenuProps> = (props: SortMenuProps) => {
  return (
    <>
      <IonMenu class="sort-menu" side="start" contentId="content">
        <IonContent id="content">
          <IonList>
            <IonRadioGroup
              value={props.currentSort}
              onIonChange={(e) => props.updateSort(e.detail.value)}
            >
              {props.sortOptions.map((option) => (
                <IonItem key={option}>
                  <IonLabel>{option}</IonLabel>
                  <IonRadio slot="start" value={option} />
                </IonItem>
              ))}
            </IonRadioGroup>
            <IonItem>
              <IonLabel>Open</IonLabel>
              <IonToggle value="open" />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
