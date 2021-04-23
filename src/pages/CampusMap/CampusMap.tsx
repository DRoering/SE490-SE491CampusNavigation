import React, { useState } from "react";
import { IonPage, IonContent, IonModal } from "@ionic/react";
import {
  BuildingModal,
  CampusMap as MapContent,
  EventModal,
  HeaderBar,
  PinFilter,
} from "../../components";
import L from "leaflet";
import { Item, ItemOptions } from "../../Reuseable";
import { BuildingFloor, Search } from "../../DataProviders";

interface CampusMapProps {
  buildings: Item[];
  showName: boolean;
  parkingLots: Item[];
  events: Item[];
  organizations: Item[];
  position: { c: L.LatLng; z: number };
  centerUser: (c: L.LatLng, z: number) => void;
  setBuilding: (b: Item) => void;
  floors: BuildingFloor[];
  showItems: {
    buildings: boolean;
    events: boolean;
    parking: boolean;
    organization: boolean;
  };
  setShowItems: (i: {
    buildings: boolean;
    events: boolean;
    parking: boolean;
    organization: boolean;
  }) => void;
}

const { searchItems } = Search;

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [searchText, setSearchText] = useState("");
  const [modalDetails, setModalDetails] = useState<{
    i: ItemOptions;
    open: boolean;
  }>({ i: {}, open: false });
  const openDetails = (i: ItemOptions) => {
    if (i.b) props.setBuilding(i.b);
    setModalDetails({ i: i, open: true });
  };

  // useEffect(() => {
  //   locate();
  // }, []);

  return (
    <IonPage>
      <HeaderBar
        displayButton={false}
        displaySearch
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <IonContent>
        <PinFilter
          current={props.showItems}
          setShowItems={props.setShowItems}
        />
        <MapContent
          buildings={
            props.showItems.buildings &&
            (searchText === ""
              ? props.buildings
              : searchItems(props.buildings, searchText))
          }
          events={
            props.showItems.events &&
            (searchText === ""
              ? props.events
              : searchItems(props.events, searchText))
          }
          parkingLots={
            props.showItems.parking &&
            (searchText === ""
              ? props.parkingLots
              : searchItems(props.parkingLots, searchText))
          }
          organizations={
            props.showItems.organization &&
            (searchText === ""
              ? props.organizations
              : searchItems(props.organizations, searchText))
          }
          showName={props.showName}
          position={props.position}
          openDetails={openDetails}
          floors={props.floors}
        />
      </IonContent>
      {modalDetails && (
        <IonModal
          isOpen={modalDetails.open}
          cssClass="item-modal"
          swipeToClose={true}
          onDidDismiss={() => setModalDetails({ ...modalDetails, open: false })}
        >
          {modalDetails.i.b && (
            <BuildingModal
              building={modalDetails.i.b}
              close={() => setModalDetails({ ...modalDetails, open: false })}
            />
          )}
          {modalDetails.i.e && (
            <EventModal
              event={modalDetails.i.e}
              closeAction={() =>
                setModalDetails({ ...modalDetails, open: false })
              }
            />
          )}
        </IonModal>
      )}
    </IonPage>
  );
};
