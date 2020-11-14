import React, { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { map, business, calendarOutline, carOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import { CampusMap, Events, Buildings, ParkingLots } from "../../pages";
import { useFakeParking, useFakeEvent } from "../../DataProviders";
import { useBuilding } from "../../DataProviders/useBuilding/useBuilding";

export const MainTabs: React.FC = () => {
  const buildings = useBuilding();
  const [parkingLots, setParkingLots] = useState(useFakeParking());
  const [events, setEvents] = useState(useFakeEvent());
  const [showName, setShowName] = useState(true);

  const toggleName = () => {
    console.log("resetName called");
    setShowName(false);
    return setTimeout(() => {
      setShowName(true);
    });
  };

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(Events)" render={() => <Events />} exact={true} />
        <Route
          path="/:tab(Map)"
          render={() => (
            <CampusMap
              buildings={buildings}
              showName={showName}
              parkingLots={parkingLots}
              events={events}
            />
          )}
          exact={true}
        />
        <Route
          path="/:tab(BuildingList)"
          render={() => <Buildings buildings={buildings} />}
          exact={true}
        />
        <Route
          path="/:tab(ParkingLotList)"
          render={() => <ParkingLots parkingLots={parkingLots} />}
          exact={true}
        />
        <Route exact path="/" render={() => <Redirect to="/Map" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
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
      </IonTabBar>
    </IonTabs>
  );
};
