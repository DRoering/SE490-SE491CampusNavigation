import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import React from "react";
import { CampusEvent } from "../../../DataProviders";

interface EventListProps {
  events: CampusEvent[];
  clickEvent: (e: CampusEvent) => void;
}

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  return (
    <IonGrid>
      <IonRow>
        {props.events.map((event) => (
          <IonCol key={event.id} size="4" sizeXs="6">
            <IonCard onClick={() => props.clickEvent(event)}>
              <img
                ion-img-cache="true"
                src={"assets/mapIcons/calendar.png"}
                alt=""
              />
              <IonCardContent>
                <IonLabel>
                  {" "}
                  {`${event.name} - `}{" "}
                  {`Hours: 
                  ${event.hours?.open?.format(
                    "hh:mm"
                  )} - ${event?.hours?.close?.format("hh:mm")}`}
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
