import React from "react";
import { IonFab, IonFabButton, IonFabList, IonIcon } from "@ionic/react";
import { business, calendar, car, chevronDown } from "ionicons/icons";

interface PinFilterProps {
  setShowItems: (b: {
    buildings: boolean;
    events: boolean;
    parking: boolean;
    organization: boolean;
  }) => void;
}

export const PinFilter: React.FC<PinFilterProps> = (props: PinFilterProps) => (
  <IonFab horizontal="end" vertical="top" slot="fixed">
    <IonFabButton color="dark">
      <IonIcon icon={chevronDown} />
    </IonFabButton>
    <IonFabList side="bottom">
      <IonFabButton
        onClick={() =>
          props.setShowItems({
            buildings: true,
            events: false,
            parking: false,
            organization: false,
          })
        }
      >
        <IonIcon icon={business} />
      </IonFabButton>
      <IonFabButton
        onClick={() =>
          props.setShowItems({
            buildings: false,
            events: true,
            parking: false,
            organization: false,
          })
        }
      >
        <IonIcon icon={calendar} />
      </IonFabButton>
      <IonFabButton
        onClick={() =>
          props.setShowItems({
            buildings: false,
            events: false,
            parking: true,
            organization: false,
          })
        }
      >
        <IonIcon icon={car} />
      </IonFabButton>
      {/* <IonFabButton
        onClick={() =>
          props.setShowItems({
            buildings: false,
            events: false,
            parking: false,
            organization: true,
          })
        }
      >
        <IonIcon icon={briefcase} />
      </IonFabButton> */}
    </IonFabList>
  </IonFab>
);
