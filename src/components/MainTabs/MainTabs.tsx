import React, { useEffect, useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import {
  map,
  briefcase,
  business,
  calendarOutline,
  carOutline,
} from "ionicons/icons";
import { Route, Redirect, useHistory } from "react-router";
import {
  Buildings,
  CampusMap,
  Organizations,
  Events,
  ParkingLots,
} from "../../pages";
import {
  useBuilding,
  useParkingLot,
  useEvent,
  useOrganization,
} from "../../DataProviders";
import L from "leaflet";

const defaultCoordsZoom = {
  c: L.latLng([45.5511, -94.1515]),
  z: 16,
};

export const MainTabs: React.FC = () => {
  const buildings = useBuilding();
  const parkingLots = useParkingLot();
  const events = useEvent();
  const organizations = useOrganization();
  const [showName, setShowName] = useState(true);
  const [coords, setCoords] = useState(defaultCoordsZoom);
  const history = useHistory();

  const toggleName = () => {
    console.log("resetName called");
    setShowName(false);
    return setTimeout(() => {
      setShowName(true);
    });
  };

  const setPosition = (c: L.LatLng) => {
    setCoords({ c: c, z: 20 });
    history.push("/Map");
  };

  useEffect(() => {
    setTimeout(() => {
      toggleName();
    });
  }, []);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path="/:tab(Events)"
          render={() => <Events events={events} />}
          exact={true}
        />
        <Route
          path="/:tab(Map)"
          render={() => (
            <CampusMap
              buildings={buildings}
              showName={showName}
              parkingLots={parkingLots}
              events={events}
              organizations={organizations}
              position={coords}
            />
          )}
          exact={true}
        />
        <Route
          path="/:tab(BuildingList)"
          render={() => (
            <Buildings buildings={buildings} setPosition={setPosition} />
          )}
          exact={true}
        />
        <Route
          path="/:tab(Organizations)"
          render={() => <Organizations organizations={organizations} />}
          exact={true}
        />
        <Route
          path="/:tab(ParkingLotList)"
          render={() => <ParkingLots parkingLots={parkingLots} />}
          exact={true}
        />
        <Route exact path="/" render={() => <Redirect to="/Map" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="Map" href="/Map" onClick={toggleName}>
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="BuildingList" href="/BuildingList">
          <IonIcon icon={business} />
          <IonLabel>Buildings</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Events" href="/Events">
          <IonIcon icon={calendarOutline} />
          <IonLabel>Events</IonLabel>
        </IonTabButton>

        <IonTabButton tab="ParkingList" href="/ParkingLotList">
          <IonIcon icon={carOutline} />
          <IonLabel>Parking Lots</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Organizations" href="/Organizations">
          <IonIcon icon={briefcase} />
          <IonLabel>Organization</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
