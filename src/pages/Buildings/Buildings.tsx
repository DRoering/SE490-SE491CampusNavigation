import { IonContent, IonModal, IonPage } from "@ionic/react";
import React, { useState } from "react";
import {
  BuildingList,
  BuildingModal,
  HeaderBar,
  SortMenu,
} from "../../components";
import {
  Building,
  useBuildingSort,
  useBuildingFilter,
  ItemSortOptions,
} from "../../DataProviders";
import { ItemFilterOptions } from "../../DataProviders/Constants/Strings";

interface BuildingsProps {
  buildings: Building[];
  setPosition: (c: L.LatLng) => void;
}

const sortOptions = ItemSortOptions.buildingOptions;
const filterOptions = ItemFilterOptions.buildingOptions;

export const Buildings: React.FC<BuildingsProps> = (props: BuildingsProps) => {
  const [buildingDetails, setBuildingDetails] = useState<Building>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useBuildingSort();
  const [filter, updateFilter, useFilter] = useBuildingFilter();
  const [openFilter, setOpenFilter] = useState(false);

  const filterByOpen = (f: boolean) => {
    setOpenFilter(f);
  };

  const openDetails = (d: Building) => {
    setBuildingDetails(d);
    setShowModal(true);
  };

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
        filterByOpen={filterByOpen}
      />
      <HeaderBar displayButton={true} />
      <IonContent>
        <BuildingList
          buildings={props.buildings}
          openDetails={openDetails}
          sortAlgorithm={useSort}
          filterAlgorithm={openFilter ? useFilter : undefined}
        />
      </IonContent>
      {buildingDetails && (
        <IonModal
          isOpen={showModal}
          cssClass="item-modal"
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}
        >
          <BuildingModal
            building={buildingDetails}
            close={() => setShowModal(false)}
            setPosition={(c: L.LatLng) => {
              props.setPosition(c);
              setShowModal(false);
            }}
          />
        </IonModal>
      )}
    </IonPage>
  );
};
