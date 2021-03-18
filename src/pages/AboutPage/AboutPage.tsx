import { HeaderBar } from "../../components";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonItemDivider,
  IonTextarea,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React, { useState } from "react";
import "./AboutPage.scss";

interface AboutPage {
  About: AboutPage[];
}

export const AboutPage: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const openMenu = (s: boolean) => setMenuState(s);

  return (
    <IonPage>
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        {" "}
        <IonItemDivider>About Page</IonItemDivider>
        <IonButton href="/Feedback">Click here to provide feedback</IonButton>
      </IonContent>
    </IonPage>
  );
};
