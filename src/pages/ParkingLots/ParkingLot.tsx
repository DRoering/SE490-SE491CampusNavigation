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
  const [parkingLotDetails, setParkingLotDetails] = useState<Lot>();
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openDetails = (p: Lot) => {
    setParkingLotDetails(p);
    setShowModal(true);
  };
  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <ParkingLotList
          parkingLots={props.parkingLots}
          openDetails={openDetails}
        />
      </IonContent>
      {parkingLotDetails && (
        <IonModal
          cssClass="item-modal"
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}
        >
          <ParkingLotModal
            parkingLot={parkingLotDetails}
            closeAction={toggleModal}
          />
        </IonModal>
      )}
    </IonPage>
  );
};
