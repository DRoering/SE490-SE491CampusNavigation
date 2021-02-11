import { IonButton, IonPopover } from "@ionic/react";
import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { funnel } from "ionicons/icons";

export const SortMenu: React.FC = () => {
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
        <IonButton color="light">Alphabetical</IonButton>
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
