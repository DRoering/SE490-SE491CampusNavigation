import { IonContent, IonModal, IonPage, IonSplitPane } from "@ionic/react";
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
  ItemSortOptions,
} from "../../DataProviders";

interface BuildingsProps {
  buildings: Building[];
  setPosition: (c: L.LatLng) => void;
}

const sortOptions = ItemSortOptions.buildingOptions;

export const Buildings: React.FC<BuildingsProps> = (props: BuildingsProps) => {
  const [buildingDetails, setBuildingDetails] = useState<Building>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useBuildingSort();
  const [menuState, setMenuState] = useState(false);

  const openMenu = (s: boolean) => setMenuState(s);

  const openDetails = (d: Building) => {
    setBuildingDetails(d);
    setShowModal(true);
  };

  return (
    <IonPage>
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        <BuildingList
          buildings={props.buildings}
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
