import React, { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { map, informationCircle } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import { Buildings, CampusMap } from "../../pages";
import { useFakeBuilding } from "../../DataProviders";

export const MainTabs: React.FC = () => {
  const [buildings, setBuildings] = useState(useFakeBuilding());

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path="/:tab(Map)"
          render={() => <CampusMap buildings={buildings} />}
          exact={true}
        />
        <Route
          path="/:tab(Home)"
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

        <IonTabButton tab="Home" href="/Home">
          <IonIcon icon={informationCircle} />
          <IonLabel>Information</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
