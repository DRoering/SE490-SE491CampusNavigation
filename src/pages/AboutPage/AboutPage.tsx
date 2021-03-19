/* eslint-disable react/no-unescaped-entities */
import { HeaderBar } from "../../components";
import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonItemDivider,
  IonButton,
  IonTextarea,
  IonCard,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./AboutPage.scss";

interface AboutPage {
  About: AboutPage[];
}

export const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <HeaderBar displayButton={false} />
      <IonContent>
        <IonItemDivider>
          <IonLabel id="title">St. Cloud State University</IonLabel>
        </IonItemDivider>
        <IonCard>
          <IonImg
            src={
              "https://www.stcloudstate.edu/_files/images/homepage-18/video-still.jpg"
            }
          />
        </IonCard>
        <IonTextarea className="app-fonts" readonly={true}>
          At St. Cloud State, an education is about far more than an education.
          It will be an opportunity to explore ideas, seek out unique
          perspectives and embrace new challenges – all of which will help you
          unleash your true potential. You will make life-long memories on our
          100-acre campus along the scenic Mississippi River. We have more than
          200 undergraduate programs of study and more than 60 graduate
          programs, holding nearly every available national accreditation.
          Founded in 1869, St. Cloud State has evolved into a comprehensive
          eslint-disable-next-line react/no-unescaped-entities university. We're
          on a mission to unleash ideas... unleash imagination, purpose and
          promise.
        </IonTextarea>
        <IonItemDivider>
          <IonLabel id="title">The App</IonLabel>
        </IonItemDivider>
        <IonTextarea className="app-fonts" readonly={true}>
          This application was created to help students and guests navigate the
          St. Cloud State University (SCSU) campus. Our goal is to provide
          information about buildings, parking lots, events, and organizations
          on campus.{" "}
        </IonTextarea>
        <IonItemDivider>
          <IonLabel id="title">The Team</IonLabel>
        </IonItemDivider>
        <IonTextarea className="app-fonts" readonly={true}>
          Our team is composed of Software Engineering students from SCSU. This
          application was created as part of our senior capstone project.
        </IonTextarea>
        <IonButton className="aboutFeedback" href="/Feedback">
          Click here to provide feedback
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
