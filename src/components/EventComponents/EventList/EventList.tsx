import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { share } from "ionicons/icons";
import moment from "moment";
import React from "react";
import { SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";
import "./EventList.scss";

interface EventListProps {
  events: Item[];
  openDetails: (e: ItemOptions) => void;
  sortAlgorithm: SortType;
}

const currentDate = moment();

console.log(currentDate);

const filterEvents = (e: Item[]) => {
  const currentEvents: Item[] = [];

  e.forEach((event) => {
    if (!event.startDate.isBefore(currentDate)) currentEvents.push(event);
  });

  return currentEvents;
};

const reSort = (events: Item[], sort: (a: Item, b: Item) => number) =>
  events.sort(sort);

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  const sortedEvents = filterEvents(
    reSort(filterEvents(props.events), props.sortAlgorithm.function)
  );

  return (
    <IonGrid>
      <IonRow>
        {sortedEvents.map((event) => (
          <IonCol key={event.id} size="4" sizeXs="6">
            <IonButton fill="clear" id="share-button">
              <IonIcon color="dark" id="ion-icon-share" icon={share}></IonIcon>
            </IonButton>
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
