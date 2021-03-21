import React, { useState } from "react";
import {
  IonContent,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonItem,
} from "@ionic/react";
import {
  BuildingList,
  BuildingModal,
  EventList,
  EventModal,
  HeaderBar,
  OrganizationList,
  OrganizationModal,
  ParkingLotList,
  SortMenu,
} from "../../components";
import {
  Building,
  CampusEvent,
  ItemSortOptions,
  Lot,
  Organization,
  useBuildingSort,
} from "../../DataProviders";
import { ItemOptions } from "../../Reuseable";

interface ItemPageProps {
  buildings: Building[];
  events: CampusEvent[];
  parking: Lot[];
  organizations: Organization[];
  setPosition: (c: L.LatLng) => void;
  setBuilding: (b: Building) => void;
}

const itemOptions = ["Buildings", "Events", "Parking", "Organizations"];
const sortOptions = ItemSortOptions.buildingOptions;

export const ItemPage: React.FC<ItemPageProps> = (props: ItemPageProps) => {
  const [currentItem, setCurrentItem] = useState("Buildings");
  const [modalDetails, setModalDetails] = useState<ItemOptions>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useBuildingSort();

  const openDetails = (i: ItemOptions) => {
    console.log(i.b);
    if (i.b) props.setBuilding(i.b);

    setModalDetails(i);
    setShowModal(true);
  };

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
      />
      <HeaderBar displayButton />
      <IonItem lines="full">
        <IonSegment
          value={currentItem}
          onIonChange={(e) => setCurrentItem(e.detail.value || "buildings")}
        >
          {itemOptions.map((item) => (
            <IonSegmentButton key={item} value={item}>
              <IonLabel>{item}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonItem>
      <IonContent>
        {currentItem.includes(itemOptions[0]) && (
          <BuildingList
            buildings={props.buildings}
            openDetails={openDetails}
            sortAlgorithm={useSort}
          />
        )}
        {currentItem.includes(itemOptions[1]) && (
          <EventList
            events={props.events}
            openDetails={openDetails}
            sortAlgorithm={useSort}
          />
        )}
        {currentItem.includes(itemOptions[2]) && (
          <ParkingLotList parkingLots={props.parking} sortAlgorithm={useSort} />
        )}
        {currentItem.includes(itemOptions[3]) && (
          <OrganizationList
            organizations={props.organizations}
            openDetails={openDetails}
            sortAlgorithm={useSort}
          />
        )}
      </IonContent>
      <IonModal
        isOpen={showModal}
        cssClass="item-modal"
        swipeToClose={true}
        onDidDismiss={() => setShowModal(false)}
      >
        {modalDetails?.b && (
          <BuildingModal
            building={modalDetails.b}
            close={() => setShowModal(false)}
            setPosition={(c: L.LatLng) => {
              props.setPosition(c);
              setShowModal(false);
            }}
          />
        )}
        {modalDetails?.e && (
          <EventModal
            event={modalDetails.e}
            closeAction={() => setShowModal(false)}
          />
        )}
        {modalDetails?.o && (
          <OrganizationModal
            organization={modalDetails.o}
            close={() => setShowModal(false)}
          />
        )}
      </IonModal>
    </IonPage>
  );
};
