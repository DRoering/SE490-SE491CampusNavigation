import React, { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { map, business, calendarOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import { CampusMap, Events, Buildings } from "../../pages";
import { useFakeBuilding } from "../../DataProviders";

export const MainTabs: React.FC = () => {
  const [buildings, setBuildings] = useState(useFakeBuilding());

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(Events)" render={() => <Events />} exact={true} />
        <Route
          path="/:tab(Map)"
          render={() => <CampusMap buildings={buildings} />}
          exact={true}
        />
        <Route
          path="/:tab(BuildingList)"
          render={() => <Buildings buildings={buildings} />}
          exact={true}
        />
        <Route exact path="/" render={() => <Redirect to="/Map" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="Map" href="/Map">
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
      </IonTabBar>
    </IonTabs>
  );
};
