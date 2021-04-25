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
import "./SortMenu.scss";

interface SortMenuProps {
  currentSort: string;
  sortOptions: string[];
  updateSort: (u?: string) => void;
  filterByCategory?: { filter: string[]; setFilter: (c: string[]) => void };
  filterByExpired?: { filter: boolean; setFilter: (e: boolean) => void };
  filterByOpen?: { filter: boolean; setFilter: (a: boolean) => void };
  filterByLot?: { filter: string; setFilter: (c: string) => void };
}

export const SortMenu: React.FC<SortMenuProps> = (props: SortMenuProps) => (
  <>
    <IonMenu side="start" class="sort-menu" contentId="options-menu">
      <IonContent id="content">
        <HeaderBar displayButton={false} displaySearch={false} />
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
                checked={props.filterByOpen.filter}
                value="open"
                onIonChange={(e) => {
                  props.filterByOpen &&
                    props.filterByOpen.setFilter(e.detail.checked);
                }}
              />
            </IonItem>
          )}
          {props.filterByCategory && (
            <IonItem>
              <IonLabel>Category</IonLabel>
              <IonSelect
                mode="md"
                multiple={true}
                cancelText="Cancel"
                okText="Confirm"
                onIonChange={(e) =>
                  props.filterByCategory &&
                  props.filterByCategory.setFilter(e.detail.value)
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
          {props.filterByLot && (
            <IonRadioGroup
              allowEmptySelection={true}
              onIonChange={(e) =>
                props.filterByLot && props.filterByLot.setFilter(e.detail.value)
              }
            >
              <IonItem>
                <IonLabel>Student</IonLabel>
                <IonRadio value="Student" />
              </IonItem>
              <IonItem>
                <IonLabel>Employee</IonLabel>
                <IonRadio value="Employee" />
              </IonItem>
            </IonRadioGroup>
          )}
          {props.filterByExpired && (
            <IonItem>
              <IonLabel>View old events</IonLabel>
              <IonToggle
                value="expired"
                checked={props.filterByExpired.filter}
                onIonChange={(e) => {
                  props.filterByExpired &&
                    props.filterByExpired.setFilter(e.detail.checked);
                }}
              />
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  </>
);
