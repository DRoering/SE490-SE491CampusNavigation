import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import {
  CampusMap as MapContent,
  HeaderBar,
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
  const [showBuildings, setShowBuildings] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showParking, setShowParking] = useState(false);
  const [showOrganization, setShowOrganization] = useState(false);
  const [userLocation, setUserLocation] = useState({
    c: L.latLng([0, 0]),
    r: 0,
  });
  const locate = async () => {
    const locale = await Geolocation.getCurrentPosition();

    setUserLocation({
      c: L.latLng([locale.coords.latitude, locale.coords.longitude]),
      r: locale.coords.heading,
    });
  };

  const centerUser = () => {
    if (!(userLocation.c === L.latLng([0, 0])))
      props.centerUser(userLocation.c, userLocation.r);
  };

  const buildings = () => {
    setShowBuildings(true);
    setShowEvents(false);
    setShowParking(false);
    setShowOrganization(false);
  };

  const events = () => {
    setShowBuildings(false);
    setShowEvents(true);
    setShowParking(false);
    setShowOrganization(false);
  };

  const parking = () => {
    setShowBuildings(false);
    setShowEvents(false);
    setShowParking(true);
    setShowOrganization(false);
  };

  const organization = () => {
    setShowBuildings(false);
    setShowEvents(false);
    setShowParking(false);
    setShowOrganization(true);
  };

  useEffect(() => {
    locate();
  }, []);

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <PinFilter
          showBuildings={buildings}
          showEvents={events}
          showParking={parking}
          showOrgs={organization}
        />
        <IonFab horizontal="end" vertical="bottom" slot="fixed">
          <IonFabButton color="dark" onClick={centerUser}>
            <IonIcon icon={navigateCircleOutline} />
          </IonFabButton>
        </IonFab>
        <MapContent
          buildings={showBuildings && props.buildings}
          events={showEvents && props.events}
          parkingLots={showParking && props.parkingLots}
          organizations={showOrganization && props.organizations}
          showName={props.showName}
          position={props.position}
          userPosition={userLocation}
        />
      </IonContent>
    </IonPage>
  );
};
