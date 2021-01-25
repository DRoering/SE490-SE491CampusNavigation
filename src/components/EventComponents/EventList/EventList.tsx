import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import moment from "moment";
import React, { Props } from "react";
import { CampusEvent } from "../../../DataProviders";
import "./EventList.scss";
import { sortArrayAlpha } from "../../HeaderBar/Components/SortAlpha";

interface EventListProps {
  events: CampusEvent[];
  clickEvent: (e: CampusEvent) => void;
}

const currentDate = moment();

console.log(currentDate);

const filterEvents = (e: CampusEvent[]) => {
  const currentEvents: CampusEvent[] = [];

  e.forEach((event) => {
    if (!event.startDate.isBefore(currentDate)) currentEvents.push(event);
  });

  return currentEvents;
};

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  const validEvents = filterEvents(props.events);
  const importedSort = sortArrayAlpha(props.events);

  return (
    <IonGrid>
      <IonRow>
        {validEvents.map((event) => (
          <IonCol key={event.id} size="4" sizeXs="6">
            <IonCard onClick={() => props.clickEvent(event)}>
              <img
                ion-img-cache="true"
                src={`assets/images/events/${event.imgUrl}.png`}
                alt="Event"
              />
              <IonCardContent>
                <IonLabel id="card-title">{event.name}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
