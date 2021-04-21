import React, { useEffect, useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { map, informationCircleOutline, atCircleOutline } from "ionicons/icons";
import { Route, Redirect, useHistory } from "react-router";
import {
  CampusMap,
  ItemPage,
  AboutPage,
  FeedbackPage,
  FloorView,
} from "../../pages";
import {
  useBuilding,
  useParkingLot,
  useEvent,
  useOrganization,
  useFloorOverlay,
  BuildingFloor,
} from "../../DataProviders";
import L from "leaflet";
import { Item } from "../../Reuseable";

const defaultCoordsZoom = {
  c: L.latLng([45.5511, -94.1515]),
  z: 16,
};

const matchFloors = (building: string, floors: BuildingFloor[]) => {
  floors.forEach((floor) => {
    if (building.includes(floor.name)) return floor;
  });
  return floors[0];
};

export const MainTabs: React.FC = () => {
  const floors = useFloorOverlay();
  const buildings = useBuilding();
  const parkingLots = useParkingLot();
  const events = useEvent();
  const organizations = useOrganization();
  const [showName, setShowName] = useState(true);
  const [coords, setCoords] = useState(defaultCoordsZoom);
  const [item, setItem] = useState<Item>(buildings[0]);
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
              setBuilding={setItem}
              floors={floors}
            />
          )}
          exact
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
              setBuilding={setItem}
            />
          )}
          exact
        />
        <Route
          path="/:tab(AboutPage)"
          render={() => <AboutPage />}
          exact={true}
        />
        <Route
          path="/FloorView"
          render={() => (
            <FloorView
              building={item}
              floors={matchFloors(item.name, floors)}
            />
          )}
          exact
        />
        <Route path="/Feedback" render={() => <FeedbackPage />} exact={true} />
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

        <IonTabButton tab="AboutPage" href="/AboutPage">
          <IonIcon icon={atCircleOutline} />
          <IonLabel>About Page</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
