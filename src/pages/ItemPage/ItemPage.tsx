import React, { useState } from "react";
import {
  IonContent,
  IonLabel,
  IonModal,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonItem,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  isPlatform,
  IonButton,
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
  ParkingLotModal,
  SortMenu,
} from "../../components";
import {
  ItemFilter,
  ItemSortOptions,
  useBuildingSort,
  Search,
} from "../../DataProviders";
import { Item, ItemOptions } from "../../Reuseable";
import "./ItemPage.scss";
import {
  briefcase,
  business,
  calendar,
  car,
  chevronDown,
} from "ionicons/icons";

interface ItemPageProps {
  buildings: Item[];
  events: Item[];
  organizations: Item[];
  parking: Item[];
  setBuilding: (b: Item) => void;
  setPosition: (c: L.LatLng, z?: number) => void;
  viewItem: (i: Item) => void;
}

const itemOptions = [
  { id: 0, icon: business, type: "Buildings" },
  { id: 1, icon: calendar, type: "Events" },
  { id: 2, icon: car, type: "Parking" },
  { id: 3, icon: briefcase, type: "Organizations" },
];
const sortOptions = ItemSortOptions.buildingOptions;
const { searchItems } = Search;

export const ItemPage: React.FC<ItemPageProps> = (props: ItemPageProps) => {
  const [currentItem, setCurrentItem] = useState("Buildings");
  const [modalDetails, setModalDetails] = useState<ItemOptions>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useBuildingSort();
  const [openFilter, setOpenFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [lotFilter, setLotFilter] = useState("");
  const [eventFilter, setEventFilter] = useState(false);

  const openDetails = (i: ItemOptions) => {
    console.log(i.b);
    if (i.b) props.setBuilding(i.b);

    setModalDetails(i);
    setShowModal(true);
  };

  const updateItem = (i: string) => {
    setCurrentItem(i);
  };

  const SegmentFilter = (
    <>
      <IonItem lines="full" id="option-item" className="ion-no-padding">
        <IonSegment
          value={currentItem}
          onIonChange={(e) => updateItem(e.detail.value || "buildings")}
        >
          {itemOptions.map((item) => (
            <IonSegmentButton key={item.id} value={item.type}>
              <IonLabel>{item.type}</IonLabel>
            </IonSegmentButton>
          ))}
        </IonSegment>
      </IonItem>
    </>
  );

  const FABFilter = (
    <>
      <IonFab horizontal="end" vertical="top" slot="fixed">
        <IonFabButton color="dark">
          <IonIcon icon={chevronDown} />
        </IonFabButton>
        <IonFabList side="bottom">
          {itemOptions.map((item) => (
            <IonFabButton key={item.id} onClick={() => updateItem(item.type)}>
              <IonIcon icon={item.icon} />
            </IonFabButton>
          ))}
        </IonFabList>
      </IonFab>
    </>
  );

  const clearFilters = () => {
    setOpenFilter(false);
    setCategoryFilter([]);
    setLotFilter("");
    setEventFilter(false);
  };

  const Sort = (
    <SortMenu
      sortOptions={sortOptions}
      currentSort={sort}
      updateSort={updateSort}
      filterByOpen={
        currentItem.includes(itemOptions[0].type)
          ? { filter: openFilter, setFilter: setOpenFilter }
          : undefined
      }
      filterByCategory={
        currentItem.includes(itemOptions[3].type)
          ? { filter: categoryFilter, setFilter: setCategoryFilter }
          : undefined
      }
      filterByLot={
        currentItem.includes(itemOptions[2].type)
          ? { filter: lotFilter, setFilter: setLotFilter }
          : undefined
      }
      filterByExpired={
        currentItem.includes(itemOptions[1].type)
          ? { filter: eventFilter, setFilter: setEventFilter }
          : undefined
      }
    />
  );

  const Modal = (
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
          setPosition={(c: L.LatLng, z?: number) => {
            z ? props.setPosition(c, z) : props.setPosition(c);
            setShowModal(false);
          }}
          viewItem={props.viewItem}
        />
      )}
      {modalDetails?.p && (
        <ParkingLotModal
          parkingLot={modalDetails.p}
          closeAction={() => setShowModal(false)}
          setPosition={(c: L.LatLng, z?: number) => {
            z ? props.setPosition(c, z) : props.setPosition(c);
            setShowModal(false);
          }}
          viewItem={props.viewItem}
        />
      )}
      {modalDetails?.e && (
        <EventModal
          event={modalDetails.e}
          closeAction={() => setShowModal(false)}
          viewItem={props.viewItem}
        />
      )}
      {modalDetails?.o && (
        <OrganizationModal
          organization={modalDetails.o}
          close={() => setShowModal(false)}
        />
      )}
    </IonModal>
  );

  return (
    <IonPage>
      {Sort}
      <HeaderBar
        displayButton
        displaySearch
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <IonContent>
        {isPlatform("android") ? FABFilter : SegmentFilter}
        {currentItem.includes(itemOptions[0].type) && (
          <BuildingList
            buildings={
              searchText === ""
                ? props.buildings
                : searchItems(props.buildings, searchText)
            }
            openDetails={openDetails}
            sortAlgorithm={useSort}
            filterAlgorithm={
              openFilter ? ItemFilter.BuildingFilters.Open : undefined
            }
          />
        )}
        {currentItem.includes(itemOptions[1].type) && (
          <EventList
            events={
              searchText === ""
                ? props.events
                : searchItems(props.events, searchText)
            }
            openDetails={openDetails}
            sortAlgorithm={useSort}
            filterAlgorithm={
              eventFilter ? ItemFilter.EventFilters.Expired : undefined
            }
          />
        )}
        {currentItem.includes(itemOptions[2].type) && (
          <ParkingLotList
            parkingLots={
              searchText === ""
                ? props.parking
                : searchItems(props.parking, searchText)
            }
            sortAlgorithm={useSort}
            filterAlgorithm={lotFilter ? ItemFilter.LotFilters.Type : undefined}
            lotType={lotFilter}
            openDetails={openDetails}
          />
        )}
        {currentItem.includes(itemOptions[3].type) && (
          <OrganizationList
            organizations={
              searchText === ""
                ? props.organizations
                : searchItems(props.organizations, searchText)
            }
            openDetails={openDetails}
            sortAlgorithm={useSort}
            categoryFilter={categoryFilter}
            filterAlgorithm={
              categoryFilter[0]
                ? ItemFilter.OrganizationFilters.Category
                : undefined
            }
          />
        )}
      </IonContent>
      {Modal}
      {(openFilter || categoryFilter.length > 0 || lotFilter !== "") && (
        <IonButton id="clear-button" expand="block" onClick={clearFilters}>
          <IonLabel id="floor-label">Clear Filters</IonLabel>
        </IonButton>
      )}
    </IonPage>
  );
};
