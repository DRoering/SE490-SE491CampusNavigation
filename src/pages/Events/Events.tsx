import { EventModal, EventList } from "../../components";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonModal,
} from "@ionic/react";
import React, { useState } from "react";
import { useFakeEvent } from "../../DataProviders";

const fakeEvent = useFakeEvent();

export const Events: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Upcoming Events</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <EventList clickEvent={toggleModal} events={fakeEvent} />
        <IonModal cssClass="item-modal" isOpen={showModal} swipeToClose={true}>
          <EventModal closeAction={toggleModal} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
