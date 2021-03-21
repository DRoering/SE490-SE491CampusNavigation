import { AboutCard, HeaderBar } from "../../components";
import {
  IonPage,
  IonContent,
  IonButton,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import "./AboutPage.scss";

interface AboutPage {
  About: AboutPage[];
}

const Information = [
  {
    key: 1,
    title: "SCSU",
    information:
      "At St. Cloud State, an education is about far more than an education. It will be an opportunity to explore ideas, seek out unique perspectives and embrace new challenges – all of which will help you help you unleash your true potential. You will make life-long memories on our 100-acre campus along the scenic Mississippi River. We have more than 200 undergraduate programs of study and more than 60 graduate programs, holding nearly every available national accreditation. Founded in 1869, St. Cloud State has evolved into a comprehensive university. We're on a mission to unleash ideas... unleash imagination, purpose and promise.",
    imgUrl:
      "https://www.stcloudstate.edu/_files/images/homepage-18/video-still.jpg",
  },
  {
    key: 2,
    title: "The App",
    information:
      "This application was created to help students and guests navigate the St. Cloud State University (SCSU) campus. Our goal is to provide information about buildings, parking lots, events, and organizations on campus.",
    imgUrl: "assets/images/about-app.png",
  },
  {
    key: 3,
    title: "The Team",
    information:
      "Our team is composed of Software Engineering students from SCSU. This application was created as part of our senior capstone project.",
    imgUrl: "assets/images/team-photo.jpg",
  },
];

export const AboutPage: React.FC = () => (
  <IonPage>
    <HeaderBar displayButton={false} />
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
