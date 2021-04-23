import React, { useState } from "react";
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
  sortOptions: string[];
  currentSort: string;
  updateSort: (u?: string) => void;
  filterByOpen?: (a: boolean) => void;
  filterByCategory?: (c: string[]) => void;
  filterByLot?: (c: string) => void;
  filterByExpired?: (e: boolean) => void;
}

export const SortMenu: React.FC<SortMenuProps> = (props: SortMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  return (
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
                  checked={isOpen}
                  value="open"
                  onIonChange={(e) => {
                    setIsOpen(e.detail.checked);
                    props.filterByOpen && props.filterByOpen(e.detail.checked);
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
            {props.filterByLot && (
              <IonRadioGroup
                allowEmptySelection={true}
                onIonChange={(e) =>
                  props.filterByLot && props.filterByLot(e.detail.value)
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
                  checked={isExpired}
                  onIonChange={(e) => {
                    setIsExpired(e.detail.checked);
                    props.filterByExpired &&
                      props.filterByExpired(e.detail.checked);
                  }}
                />
              </IonItem>
            )}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};
