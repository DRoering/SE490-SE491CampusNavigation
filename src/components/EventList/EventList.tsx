import {
  IonList,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
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
        <IonCard
          key={event.id}
          onClick={() => props.clickEvent()}
          class="item-text-wrap"
        >
          <IonCardContent>
            <IonImg src="assets/mapIcons/calendar.png" />
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonLabel>{`${event.name}`}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>Host: {event.host}</IonLabel>
                  <p id="info">
                    Description: {`${event.description}`} <br />
                    {`Hours:
                    ${event?.hours?.open?.format(
                      "hh:mm"
                    )} - ${event?.hours?.close?.format("hh:mm")}`}
                  </p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
