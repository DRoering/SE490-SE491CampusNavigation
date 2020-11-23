import React, { useState } from "react";
import { IonContent, IonModal, IonPage } from "@ionic/react";
import { ParkingLotList, ParkingLotModal, HeaderBar } from "../../components";
import { Lot } from "../../DataProviders";

interface ParkingLotProps {
  parkingLots: Lot[];
}

export const ParkingLots: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <ParkingLotList
          parkingLots={props.parkingLots}
          clickEvent={toggleModal}
        />
        <IonModal cssClass="item-modal" isOpen={showModal} swipeToClose={true}>
          <ParkingLotModal
            parkingLot={props.parkingLots}
            closeAction={toggleModal}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};
