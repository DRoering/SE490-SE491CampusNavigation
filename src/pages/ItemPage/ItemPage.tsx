import React, { useState } from "react";
import {
  IonContent,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonSearchbar,
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
  ItemSortOptions,
  useBuildingSort,
  useBuildingFilter,
} from "../../DataProviders";
import { Item, ItemOptions } from "../../Reuseable";
import { ItemFilterOptions } from "../../DataProviders/Constants/Strings";
import "./ItemPage.scss";
import { Search } from "../../DataProviders";
import { search } from "ionicons/icons";

interface ItemPageProps {
  buildings: Item[];
  events: Item[];
  parking: Item[];
  organizations: Item[];
  setPosition: (c: L.LatLng) => void;
  setBuilding: (b: Item) => void;
}

const itemOptions = ["Buildings", "Events", "Parking", "Organizations"];
const sortOptions = ItemSortOptions.buildingOptions;
const filterOptions = ItemFilterOptions.buildingOptions;

export const ItemPage: React.FC<ItemPageProps> = (props: ItemPageProps) => {
  const [currentItem, setCurrentItem] = useState("Buildings");
  const [modalDetails, setModalDetails] = useState<ItemOptions>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useBuildingSort();
  const [filter, updateFilter, useFilter] = useBuildingFilter();
  const [openFilter, setOpenFilter] = useState(false);
  const [searchText, setSearchText] = useState<string>("");

  const filterByOpen = (f: boolean) => {
    setOpenFilter(f);
  };

  const openDetails = (i: ItemOptions) => {
    console.log(i.b);
    if (i.b) props.setBuilding(i.b);

    setModalDetails(i);
    setShowModal(true);
  };

  const { searchItems } = Search;

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
        filterByOpen={filterByOpen}
      />
      <HeaderBar displayButton />
      <IonSearchbar
        inputMode="text"
        value={searchText}
        onIonChange={(t) => setSearchText(t.detail.value || "")}
      />

      <IonItem lines="full" id="option-item" className="ion-no-padding">
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
            buildings={searchItems(props.buildings, searchText)}
            openDetails={openDetails}
            sortAlgorithm={useSort}
            filterAlgorithm={openFilter ? useFilter : undefined}
          />
        )}
        {currentItem.includes(itemOptions[1]) && (
          <EventList
            events={searchItems(props.events, searchText)}
            openDetails={openDetails}
            sortAlgorithm={useSort}
          />
        )}
        {currentItem.includes(itemOptions[2]) && (
          <ParkingLotList
            parkingLots={searchItems(props.parking, searchText)}
            sortAlgorithm={useSort}
          />
        )}
        {currentItem.includes(itemOptions[3]) && (
          <OrganizationList
            organizations={searchItems(props.organizations, searchText)}
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
