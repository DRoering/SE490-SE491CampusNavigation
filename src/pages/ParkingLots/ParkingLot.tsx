import React, { useState } from "react";
import { IonContent, IonModal, IonPage } from "@ionic/react";
import {
  ParkingLotList,
  ParkingLotModal,
  HeaderBar,
  SortMenu,
} from "../../components";
import { Lot, useLotSort, ItemSortOptions } from "../../DataProviders";

interface ParkingLotProps {
  parkingLots: Lot[];
}

export const ParkingLots: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const [showModal, setShowModal] = useState(false);
  const [parkingLotDetails, setParkingLotDetails] = useState<Lot>();
  const [sort, updateSort, useSort] = useLotSort();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const sortOptions = ItemSortOptions.lotOptions;

  const openDetails = (p: Lot) => {
    setParkingLotDetails(p);
    setShowModal(true);
  };
  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
      />
      <HeaderBar displayButton={true} />
      <IonContent>
        <ParkingLotList
          parkingLots={props.parkingLots}
          openDetails={openDetails}
          sortAlgorithm={useSort}
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
