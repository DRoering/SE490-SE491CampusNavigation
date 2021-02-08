import { IonContent, IonModal, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { BuildingList, BuildingModal, HeaderBar } from "../../components";
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

  const openDetails = (d: Building) => {
    setBuildingDetails(d);
    setShowModal(true);
  };

  return (
    <IonPage>
      <HeaderBar
        sortObject={{
          sortOptions: sortOptions,
          currentSort: sort,
          updateSort: updateSort,
        }}
      />
      <IonContent>
        <BuildingList
          buildings={props.buildings}
          openDetails={openDetails}
          sortAlgorithm={useSort}
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
