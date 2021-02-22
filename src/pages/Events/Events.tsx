import { EventModal, EventList, HeaderBar, SortMenu } from "../../components";
import { IonPage, IonContent, IonModal, IonSplitPane } from "@ionic/react";
import React, { useState } from "react";
import {
  CampusEvent,
  useEventSort,
  ItemSortOptions,
} from "../../DataProviders";

interface EventProps {
  events: CampusEvent[];
}

const sortOptions = ItemSortOptions.eventOptions;

export const Events: React.FC<EventProps> = (props: EventProps) => {
  const [eventDetails, setEventDetails] = useState<CampusEvent>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useEventSort();
  const [menuState, setMenuState] = useState(false);

  const openMenu = (s: boolean) => setMenuState(s);

  const openDetails = (e: CampusEvent) => {
    setEventDetails(e);
    setShowModal(true);
  };

  return (
    <IonPage>
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        <EventList
          events={props.events}
          clickEvent={openDetails}
          sortAlgorithm={useSort}
        />
        <IonSplitPane disabled={false} when={menuState}>
          <SortMenu
            sortOptions={sortOptions}
            currentSort={sort}
            updateSort={updateSort}
          />
        </IonSplitPane>
      </IonContent>
      {eventDetails && (
        <IonModal
          isOpen={showModal}
          cssClass="item-modal"
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}
        >
          <EventModal
            event={eventDetails}
            closeAction={() => setShowModal(false)}
          />
        </IonModal>
      )}
    </IonPage>
  );
};
