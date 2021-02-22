import React, { useState } from "react";
import { IonContent, IonModal, IonPage, IonSplitPane } from "@ionic/react";
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
  const [menuState, setMenuState] = useState(false);

  const openMenu = (s: boolean) => setMenuState(s);

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
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        <ParkingLotList
          parkingLots={props.parkingLots}
          openDetails={openDetails}
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
