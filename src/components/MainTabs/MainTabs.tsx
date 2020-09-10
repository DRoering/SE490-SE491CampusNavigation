import React from "react";
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
import { Home, CampusMap } from "../../pages";

export const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/:tab(Map)" render={() => <CampusMap />} exact={true} />
        <Route path="/:tab(Home)" render={() => <Home />} exact={true} />
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
