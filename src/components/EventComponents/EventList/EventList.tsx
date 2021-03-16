import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";
import moment from "moment";
import React from "react";
import { CampusEvent, SortType } from "../../../DataProviders";
import { ItemOptions } from "../../../Reuseable";
import "./EventList.scss";

interface EventListProps {
  events: CampusEvent[];
  openDetails: (e: ItemOptions) => void;
  sortAlgorithm: SortType;
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

const reSort = (
  events: CampusEvent[],
  sort: (a: CampusEvent, b: CampusEvent) => number
) => events.sort(sort);

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  const sortedEvents = filterEvents(
    reSort(filterEvents(props.events), props.sortAlgorithm.function)
  );

  return (
    <IonGrid>
      <IonRow>
        {sortedEvents.map((event) => (
          <IonCol key={event.id} size="4" sizeXs="6">
            <IonCard onClick={() => props.openDetails({ e: event })}>
              <img
                ion-img-cache="true"
                src={`${event.source}${event.imgUrl}`}
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
