import { IonList, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { CampusEvent } from "../../DataProviders";

interface EventListProps {
  events: CampusEvent[];
  clickEvent: () => void;
}

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  return (
    <IonList>
      {props.events.map((event) => (
        <IonItem key={event.id} button onClick={props.clickEvent}>
          <IonLabel>{event.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
};
