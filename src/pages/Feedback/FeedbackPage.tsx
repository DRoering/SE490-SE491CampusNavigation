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
import "./FeedbackPage.scss";

interface FeedbackPage {
  Feedback: FeedbackPage[];
}

export const FeedbackPage: React.FC = () => {
  const [menuState, setMenuState] = useState(false);
  const openMenu = (s: boolean) => setMenuState(s);
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  return (
    <IonPage>
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        {" "}
        <IonItemDivider>Campus Navigation Feedback Form</IonItemDivider>
        <IonItem>
          <IonLabel position="floating">Enter Name: </IonLabel>
          <IonInput
            className="feedbackText"
            value={name}
            placeholder="Name"
            required
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter Email: </IonLabel>
          <IonInput
            className="feedbackText"
            value={email}
            placeholder="Email"
            required
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel position="floating">Enter Your Message Below: </IonLabel>
          <IonCard>
            <IonTextarea
              className="feedbackText"
              rows={20}
              cols={40}
              placeholder="Message"
              value={message}
              onIonChange={(e) => setMessage(e.detail.value!)}
            ></IonTextarea>
          </IonCard>
        </IonItem>
        <IonButton className="feedbackButton" size="large" expand="block">
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
