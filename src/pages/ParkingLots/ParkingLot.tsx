import React, { useState } from "react";
import { IonContent, IonModal, IonPage, IonSplitPane } from "@ionic/react";
import {
  ParkingLotList,
  ParkingLotModal,
  HeaderBar,
  SortMenu,
} from "../../components";
import {
  Lot,
  useLotSort,
  ItemSortOptions,
  useBuildingFilter,
} from "../../DataProviders";
import { ItemFilterOptions } from "../../DataProviders/Constants/Strings";

interface ParkingLotProps {
  parkingLots: Lot[];
}

export const ParkingLots: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const [showModal, setShowModal] = useState(false);
  const [parkingLotDetails, setParkingLotDetails] = useState<Lot>();
  const [sort, updateSort, useSort] = useLotSort();
  const [filter, updateFilter, useFilter] = useBuildingFilter();
  const [menuState, setMenuState] = useState(false);

  const openMenu = (s: boolean) => setMenuState(s);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const sortOptions = ItemSortOptions.lotOptions;
  const filterOptions = ItemFilterOptions.buildingOptions;

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
            filterOptions={filterOptions}
            currentFilter={filter}
            updateFilter={updateFilter}
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
