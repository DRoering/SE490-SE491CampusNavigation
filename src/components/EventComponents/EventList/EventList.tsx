import {
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonContent,
} from "@ionic/react";
import moment from "moment";
import React from "react";
import { SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";
import { ItemListSkeleton, ShareButton } from "../../";
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
    <IonContent>
      {props.events[0] ? (
        <IonGrid>
          <IonRow>
            {sortedEvents.map((event) => (
              <IonCol key={event.id} size="4" sizeXs="6">
                <ShareButton
                  id="share-button"
                  class="none"
                  iconId="ion-icon-share"
                  expand={false}
                  fill={false}
                  shareItem={event}
                />
                <IonCard
                  class="card-background"
                  onClick={() => props.openDetails({ e: event })}
                >
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
      ) : (
        <>
          <ItemListSkeleton />
        </>
      )}
    </IonContent>
  );
};
