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
  BuildingFilters,
  OrganizationFilters,
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
  const [openFilter, setOpenFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);

  const filterByOpen = (f: boolean) => {
    setOpenFilter(f);
  };

  const openDetails = (i: ItemOptions) => {
    console.log(i.b);
    if (i.b) props.setBuilding(i.b);

    setModalDetails(i);
    setShowModal(true);
  };

  const updateItem = (i: string) => {
    setCurrentItem(i);
  };

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
        filterByOpen={
          currentItem.includes(itemOptions[0]) ? filterByOpen : undefined
        }
        filterByCategory={
          currentItem.includes(itemOptions[3]) ? setCategoryFilter : undefined
        }
      />
      <HeaderBar displayButton />
      <IonItem lines="full" id="option-item" className="ion-no-padding">
        <IonSegment
          value={currentItem}
          onIonChange={(e) => updateItem(e.detail.value || "buildings")}
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
            filterAlgorithm={openFilter ? BuildingFilters.Open : undefined}
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
            categoryFilter={categoryFilter}
            filterAlgorithm={
              categoryFilter[0] ? OrganizationFilters.Category : undefined
            }
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
