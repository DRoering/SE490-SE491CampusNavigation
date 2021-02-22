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
} from "@ionic/react";

interface SortMenuProps {
  sortOptions: string[];
  currentSort: string;
  updateSort: (u?: string) => void;
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
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
