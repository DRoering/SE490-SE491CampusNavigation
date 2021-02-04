import {
  IonButton,
  IonPopover,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonList,
  IonItem,
} from "@ionic/react";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { funnel } from "ionicons/icons";

interface SortMenuProps {
  sortOptions: string[];
  currentSort: string;
  updateSort: (u?: string) => void;
}

export const SortMenu: React.FC<SortMenuProps> = (props: SortMenuProps) => {
  const [popoverState, setPopoverState] = useState({
    showPopoverState: false,
    event: undefined,
  });

  return (
    <>
      <IonPopover
        cssClass="item-popover"
        event={popoverState.event}
        isOpen={popoverState.showPopoverState}
        onDidDismiss={() =>
          setPopoverState({ showPopoverState: false, event: undefined })
        }
      >
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
      </IonPopover>
      <IonButton
        slot="end"
        onClick={(e: any) => {
          e.persist();
          setPopoverState({ showPopoverState: true, event: e });
        }}
      >
        <IonIcon icon={funnel} />
      </IonButton>
    </>
  );
};
