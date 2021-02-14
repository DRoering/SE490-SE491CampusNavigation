import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonText,
  IonItemDivider,
  IonButton,
  IonLabel,
  IonItem,
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
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showItems, setShowItems] = useState({
    buildings: true,
    events: false,
    parking: false,
    organization: false,
  });
  const [itemDetails, setItemDetails] = useState<{
    b?: Building;
    e?: CampusEvent;
    p?: Lot;
  }>();
  const [showItemModal, setShowItemModal] = useState(false);
  const [showNavModal, setShowNavModal] = useState(false);
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
    setItemDetails(i);
    setShowItemModal(true);
  };

  const openNav = (i: { b?: Building; e?: CampusEvent; p?: Lot }) => {
    setItemDetails(i);
    setShowNavModal(true);
  };
  // useEffect(() => {
  //   locate();
  // }, []);

  return (
    <IonPage>
      <HeaderBar />
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
          openNav={openNav}
        />
      </IonContent>
      {itemDetails && (
        <IonModal
          isOpen={showItemModal}
          cssClass="item-modal"
          swipeToClose={true}
          onDidDismiss={() => setShowItemModal(false)}
        >
          {itemDetails.b && (
            <BuildingModal
              building={itemDetails.b}
              close={() => setShowItemModal(false)}
            />
          )}
          {itemDetails.e && (
            <EventModal
              event={itemDetails.e}
              closeAction={() => setShowItemModal(false)}
            />
          )}
          {itemDetails.p && (
            <ParkingLotModal
              parkingLot={itemDetails.p}
              closeAction={() => setShowItemModal(false)}
            />
          )}
        </IonModal>
      )}
      <IonModal
        isOpen={showNavModal}
        cssClass="nav-modal"
        swipeToClose={true}
        onDidDismiss={() => setShowNavModal(false)}
      >
        <IonItem>
          <IonText placeholder="destination"></IonText>
        </IonItem>
        <IonItem>
          <IonText placeholder="destination"></IonText>
        </IonItem>
        <IonItemDivider />
        <IonButton onClick={() => setShowNavModal(false)}>
          <IonLabel>Cancel</IonLabel>
        </IonButton>
        <IonButton>
          <IonLabel>Navigate</IonLabel>
        </IonButton>
      </IonModal>
    </IonPage>
  );
};
