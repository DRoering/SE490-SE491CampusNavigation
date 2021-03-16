import React, { useEffect, useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { map, informationCircleOutline } from "ionicons/icons";
import { Route, Redirect, useHistory } from "react-router";
import { CampusMap, ItemPage } from "../../pages";
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

  const setPosition = (c: L.LatLng, r?: number) => {
    if (c === coords.c)
      setCoords({ c: L.latLng([c.lat + 0.0001, c.lng]), z: 20 });
    else setCoords({ c: c, z: 20 });
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
          path="/:tab(Map)"
          render={() => (
            <CampusMap
              buildings={buildings}
              showName={showName}
              parkingLots={parkingLots}
              events={events}
              organizations={organizations}
              position={coords}
              centerUser={setPosition}
            />
          )}
          exact={true}
        />
        <Route
          path="/:tab(Items)"
          render={() => (
            <ItemPage
              buildings={buildings}
              events={events}
              parking={parkingLots}
              organizations={organizations}
              setPosition={setPosition}
            />
          )}
          exact
        />
        <Route exact path="/" render={() => <Redirect to="/Map" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color="primary">
        <IonTabButton tab="Map" href="/Map" onClick={toggleName}>
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Items" href="/Items">
          <IonIcon icon={informationCircleOutline} />
          <IonLabel>Information</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
