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
import { FilterType, SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";
import { ItemListSkeleton, ShareButton } from "../../";
import "./EventList.scss";

interface EventListProps {
  events: Item[];
  filterAlgorithm?: FilterType;
  openDetails: (e: ItemOptions) => void;
  sortAlgorithm: SortType;
}

const currentDate = moment();

const newEvents = (i: Item) => i.startDate.isAfter(currentDate);

const filterEvents = (e: Item[], f: (i: Item) => boolean) => e.filter(f);

const reSort = (events: Item[], sort: (a: Item, b: Item) => number) =>
  events.sort(sort);

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  const sortedEvents = filterEvents(
    reSort(props.events, props.sortAlgorithm.function),
    props.filterAlgorithm ? props.filterAlgorithm.function : newEvents
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
