import { EventModal, EventList, HeaderBar } from "../../components";
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
      <HeaderBar />
      <IonContent>
        <EventList clickEvent={toggleModal} events={fakeEvent} />
        <IonModal cssClass="item-modal" isOpen={showModal}>
          <EventModal closeAction={toggleModal} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
