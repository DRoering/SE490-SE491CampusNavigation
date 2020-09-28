import MyModal from "./MyModal";
import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonContent,
  IonLabel,
  IonModal,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import { useFakeEvent } from "../../DataProviders";

const fakeEvent = useFakeEvent();

export const Events: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  async function closeModal() {
    await setShowModal(false);
  }

  return (
    <IonPage>
      <IonContent>
        <IonList>
          {fakeEvent.map((event) => (
            // eslint-disable-next-line react/jsx-key
            <IonItem button onClick={() => setShowModal(true)}>
              <IonLabel>{event.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonModal isOpen={showModal}>
          <MyModal closeAction={closeModal}></MyModal>
        </IonModal>
      </IonContent>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle>Upcoming Events</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
};
