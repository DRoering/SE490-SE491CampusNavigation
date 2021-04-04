import React from "react";
import { IonApp, isPlatform, setupConfig } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { MainTabs } from "./components";
import { Plugins } from "@capacitor/core";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./App.scss";
const { SplashScreen } = Plugins;
SplashScreen.show({ showDuration: 5000 });

const App: React.FC = () => {
  setupConfig({
    mode: isPlatform("android") ? "md" : "ios",
  });
  setTimeout(() => {
    SplashScreen.hide({ fadeOutDuration: 600 });
  }, 1500);
  return (
    <IonApp>
      <IonReactRouter>
        <MainTabs />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
