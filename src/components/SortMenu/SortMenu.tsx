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
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { ItemFilterOptions } from "../../DataProviders";
import { HeaderBar } from "..";

interface SortMenuProps {
  sortOptions: string[];
  currentSort: string;
  updateSort: (u?: string) => void;
  filterByOpen?: (a: boolean) => void;
  filterByCategory?: (c: string[]) => void;
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
            {props.filterByOpen && (
              <IonItem>
                <IonLabel>Open</IonLabel>
                <IonToggle
                  value="open"
                  onIonChange={(e) =>
                    props.filterByOpen && props.filterByOpen(e.detail.checked)
                  }
                />
              </IonItem>
            )}
            {props.filterByCategory && (
              <IonItem>
                <IonLabel>Category</IonLabel>
                <IonSelect
                  multiple={true}
                  cancelText="Cancel"
                  okText="Confirm"
                  onIonChange={(e) =>
                    props.filterByCategory &&
                    props.filterByCategory(e.detail.value)
                  }
                >
                  {ItemFilterOptions.orgCategories.map((category) => (
                    <IonSelectOption key={category} value={category}>
                      {category}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            )}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
