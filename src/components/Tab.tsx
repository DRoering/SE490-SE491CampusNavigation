import React from 'react';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from '@ionic/react';
import { map, informationCircle } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import Home from '../pages/Home';

export const Tab: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="map">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="information">
          <IonIcon icon={informationCircle} />
          <IonLabel>Information</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
