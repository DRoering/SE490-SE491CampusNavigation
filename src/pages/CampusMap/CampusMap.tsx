import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
} from "@ionic/react";
import {
  BuildingModal,
  CampusMap as MapContent,
  EventModal,
  HeaderBar,
  PinFilter,
} from "../../components";
import L from "leaflet";
import { Geolocation } from "@ionic-native/geolocation";
import { navigateCircleOutline } from "ionicons/icons";
import { Item, ItemOptions } from "../../Reuseable";

interface CampusMapProps {
  buildings: Item[];
  showName: boolean;
  parkingLots: Item[];
  events: Item[];
  organizations: Item[];
  position: { c: L.LatLng; z: number };
  centerUser: (c: L.LatLng, z: number) => void;
  setBuilding: (b: Item) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showItems, setShowItems] = useState({
    buildings: true,
    events: false,
    parking: false,
    organization: false,
  });
  const [modalDetails, setModalDetails] = useState<{
    i: ItemOptions;
    open: boolean;
  }>({ i: {}, open: false });
  const [userLocation, setUserLocation] = useState({
    c: L.latLng([45.551613, -94.148977]),
    r: 0,
  });
  const locate = async () => {
    const locale = await Geolocation.getCurrentPosition();

    setUserLocation({
      c: L.latLng([locale.coords.latitude, locale.coords.longitude]),
      r: locale.coords.heading,
    });

    console.log(locale);
  };

  const centerUser = () => {
    if (!(userLocation.c === L.latLng([45.551613, -94.148977])))
      props.centerUser(userLocation.c, userLocation.r);
  };

  const openDetails = (i: ItemOptions) => {
    if (i.b) props.setBuilding(i.b);
    setModalDetails({ i: i, open: true });
  };

  // useEffect(() => {
  //   locate();
  // }, []);

  return (
    <IonPage>
      <HeaderBar displayButton={false} />
      <IonContent>
        <PinFilter setShowItems={setShowItems} />
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton color="dark" onClick={centerUser}>
            <IonIcon icon={navigateCircleOutline} />
          </IonFabButton>
        </IonFab>
        <MapContent
          buildings={showItems.buildings && props.buildings}
          events={showItems.events && props.events}
          parkingLots={showItems.parking && props.parkingLots}
          organizations={showItems.organization && props.organizations}
          showName={props.showName}
          position={props.position}
          userPosition={userLocation}
          openDetails={openDetails}
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
