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
  ItemFilter,
  ItemSortOptions,
  useBuildingSort,
} from "../../DataProviders";
import { Item, ItemOptions } from "../../Reuseable";
import "./ItemPage.scss";
import { Search } from "../../DataProviders";
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
  parking: Item[];
  organizations: Item[];
  setPosition: (c: L.LatLng, z?: number) => void;
  setBuilding: (b: Item) => void;
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
  const [lotFilter, setLotFilter] = useState<string>("");

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

  return (
    <IonPage>
      <SortMenu
        sortOptions={sortOptions}
        currentSort={sort}
        updateSort={updateSort}
        filterByOpen={
          currentItem.includes(itemOptions[0].type) ? filterByOpen : undefined
        }
        filterByCategory={
          currentItem.includes(itemOptions[3].type)
            ? setCategoryFilter
            : undefined
        }
        filterByLot={
          currentItem.includes(itemOptions[2].type) ? setLotFilter : undefined
        }
      />
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
