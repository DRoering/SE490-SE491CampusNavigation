import { EventModal, EventList, HeaderBar, SortMenu } from "../../components";
import { IonPage, IonContent, IonModal } from "@ionic/react";
import React, { useState } from "react";
import {
  CampusEvent,
  useEventSort,
  ItemSortOptions,
  useBuildingFilter,
} from "../../DataProviders";
import { ItemFilterOptions } from "../../DataProviders/Constants/Strings";

interface EventProps {
  events: CampusEvent[];
}

const sortOptions = ItemSortOptions.eventOptions;
const filterOptions = ItemFilterOptions.buildingOptions;

export const Events: React.FC<EventProps> = (props: EventProps) => {
  const [eventDetails, setEventDetails] = useState<CampusEvent>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useEventSort();
  const [filter, updateFilter, useFilter] = useBuildingFilter();

  const openDetails = (e: CampusEvent) => {
    setEventDetails(e);
    setShowModal(true);
  };

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
        filterOptions={filterOptions}
        currentFilter={filter}
        updateFilter={updateFilter}
      />
      <HeaderBar displayButton={true} />
      <IonContent>
        <EventList
          events={props.events}
          clickEvent={openDetails}
          sortAlgorithm={useSort}
        />
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
