import { EventModal, EventList, HeaderBar } from "../../components";
import { IonPage, IonContent, IonModal } from "@ionic/react";
import React, { useState } from "react";
import { CampusEvent } from "../../DataProviders";

interface EventProps {
  events: CampusEvent[];
}

export const Events: React.FC<EventProps> = (props: EventProps) => {
  const [eventDetails, setEventDetails] = useState<CampusEvent>();
  const [showModal, setShowModal] = useState(false);

  const openDetails = (e: CampusEvent) => {
    setEventDetails(e);
    setShowModal(true);
  };

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <EventList events={props.events} clickEvent={openDetails} />
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
