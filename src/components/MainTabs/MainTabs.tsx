import React, { useState } from "react";
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
import { Route, Redirect } from "react-router";
import {
  Buildings,
  CampusMap,
  Organizations,
  Events,
  ParkingLots,
} from "../../pages";
import {
  useFakeBuilding,
  useFakeParking,
  useFakeEvent,
  useFakeOrganization,
} from "../../DataProviders";

export const MainTabs: React.FC = () => {
  const [buildings, setBuildings] = useState(useFakeBuilding());
  const [parkingLots, setParkingLots] = useState(useFakeParking());
  const [events, setEvents] = useState(useFakeEvent());
  const [showName, setShowName] = useState(true);
  const [organization, setOrganization] = useState(useFakeOrganization());

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
          path="/:tab(Organizations)"
          render={() => <Organizations organization={organization} />}
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

        <IonTabButton tab="Organizations" href="/Organizations">
          <IonIcon icon={briefcase} />
          <IonLabel>Organization</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};