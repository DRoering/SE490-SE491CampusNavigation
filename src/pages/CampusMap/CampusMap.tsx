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
  ParkingLotModal,
  PinFilter,
} from "../../components";
import { Building, Lot, CampusEvent, Organization } from "../../DataProviders";
import L from "leaflet";
import { Geolocation } from "@ionic-native/geolocation";
import { navigateCircleOutline } from "ionicons/icons";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
  organizations: Organization[];
  position: { c: L.LatLng; z: number };
  centerUser: (c: L.LatLng, z: number) => void;
  setBuilding: (b: Building) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showItems, setShowItems] = useState({
    buildings: true,
    events: false,
    parking: false,
    organization: false,
  });
  const [modalDetails, setModalDetails] = useState<{
    b?: Building;
    e?: CampusEvent;
    p?: Lot;
    open: boolean;
  }>({ b: undefined, e: undefined, p: undefined, open: false });
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

  const openDetails = (i: { b?: Building; e?: CampusEvent; p?: Lot }) => {
    if (i.b) props.setBuilding(i.b);
    setModalDetails({ ...i, open: true });
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
          {modalDetails.b && (
            <BuildingModal
              building={modalDetails.b}
              close={() => setModalDetails({ ...modalDetails, open: false })}
            />
          )}
          {modalDetails.e && (
            <EventModal
              event={modalDetails.e}
              closeAction={() =>
                setModalDetails({ ...modalDetails, open: false })
              }
            />
          )}
          {modalDetails.p && (
            <ParkingLotModal
              parkingLot={modalDetails.p}
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
