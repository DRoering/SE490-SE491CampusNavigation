import { AboutCard, HeaderBar } from "../../components";
import {
  IonPage,
  IonContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { Information } from "../../DataProviders";
import "./AboutPage.scss";

export const AboutPage: React.FC = () => (
  <IonPage>
    <HeaderBar displayButton={false} displaySearch={false} />
    <IonContent>
      <IonGrid>
        <IonRow>
          {Information.map((info) => (
            <IonCol key={info.key} size="12">
              <AboutCard
                title={info.title}
                information={info.information}
                imgUrl={info.imgUrl}
              />
            </IonCol>
          ))}
          <IonCol size="12">
            <IonButton
              expand="block"
              className="about-feedback"
              routerLink="/Feedback"
            >
              Click here to provide feedback
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);
