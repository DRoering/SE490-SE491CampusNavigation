import React from "react";
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  isPlatform,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonItem,
} from "@ionic/react";
import { business, calendar, car, chevronDown } from "ionicons/icons";

interface PinFilterProps {
  current: {
    buildings: boolean;
    events: boolean;
    parking: boolean;
    organization: boolean;
  };
  setShowItems: (b: {
    buildings: boolean;
    events: boolean;
    parking: boolean;
    organization: boolean;
  }) => void;
}

const itemOptions = [
  {
    id: 0,
    icon: business,
    type: "Buildings",
    arg: {
      buildings: true,
      events: false,
      parking: false,
      organization: false,
    },
  },

  {
    id: 1,
    icon: calendar,
    type: "Events",
    arg: {
      buildings: false,
      events: true,
      parking: false,
      organization: false,
    },
  },
  {
    id: 2,
    icon: car,
    type: "Lots",
    arg: {
      buildings: false,
      events: false,
      parking: true,
      organization: false,
    },
  },
];

const getCurrent = (c: {
  buildings: boolean;
  events: boolean;
  parking: boolean;
  organization: boolean;
}) => {
  if (c.events) return "Events";
  if (c.parking) return "Lots";
  return "Buildings";
};

export const PinFilter: React.FC<PinFilterProps> = (props: PinFilterProps) =>
  isPlatform("android") ? (
    <IonFab horizontal="end" vertical="top" slot="fixed">
      <IonFabButton color="dark">
        <IonIcon icon={chevronDown} />
      </IonFabButton>
      <IonFabList side="bottom">
        {itemOptions.map((item) => (
          <IonFabButton
            key={item.id}
            onClick={() => props.setShowItems(item.arg)}
          >
            <IonIcon icon={item.icon} />
          </IonFabButton>
        ))}
      </IonFabList>
    </IonFab>
  ) : (
    <IonItem lines="full" id="option-item" className="ion-no-padding">
      <IonSegment value={getCurrent(props.current)}>
        {itemOptions.map((item) => (
          <IonSegmentButton
            key={item.id}
            value={item.type}
            onClick={() => props.setShowItems(item.arg)}
          >
            <IonLabel>{item.type}</IonLabel>
          </IonSegmentButton>
        ))}
      </IonSegment>
    </IonItem>
  );
