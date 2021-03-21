import React from "react";
import {
  IonMenu,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonList,
  IonItem,
  IonContent,
  IonToggle,
} from "@ionic/react";
import { HeaderBar } from "..";

interface SortMenuProps {
  sortOptions: string[];
  currentSort: string;
  updateSort: (u?: string) => void;
  filterByOpen: (a: boolean) => void;
}

export const SortMenu: React.FC<SortMenuProps> = (props: SortMenuProps) => {
  return (
    <>
      <IonMenu class="sort-menu" side="start" contentId="options-menu">
        <IonContent id="content">
          <HeaderBar displayButton={false} />
          <IonList>
            <IonRadioGroup
              value={props.currentSort}
              onIonChange={(e) => props.updateSort(e.detail.value)}
            >
              {props.sortOptions.map((option) => (
                <IonItem key={option}>
                  <IonLabel>{option}</IonLabel>
                  <IonRadio slot="end" value={option} />
                </IonItem>
              ))}
            </IonRadioGroup>
            <IonItem>
              <IonLabel>Open</IonLabel>
              <IonToggle
                value="open"
                onIonChange={(e) => props.filterByOpen(e.detail.checked)}
              />
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
