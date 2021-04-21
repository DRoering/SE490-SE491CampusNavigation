import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonItemDivider,
  IonTextarea,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { Emailer } from "../../DataProviders/Emailer";
import "./FeedbackPage.scss";
import { useHistory } from "react-router-dom";

export const FeedbackPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [autoDismissToast, setAutoDismissToast] = useState(false);
  const { verifyEmail, sendFeedback } = Emailer;
  const history = useHistory();
  const isAllValid = () => {
    if (isNameValid && isEmailValid && isMessageValid) {
      sendFeedback(email, name, message)
        .then(() => {
          setToastMessage("Your feedback has been received.");
          setAutoDismissToast(true);
          setShowToast(true);
          setTimeout(() => {
            history.goBack();
          }, 3100);
        })
        .catch(() => {
          setToastMessage("We were unsuccessful in sending your message.");
          setAutoDismissToast(false);
          setShowToast(true);
        });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons>
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemDivider>Campus Navigation Feedback Form</IonItemDivider>
        <IonItem>
          <IonLabel position="floating">Enter Name: </IonLabel>
          <IonInput
            inputMode="text"
            className="feedbackText"
            value={name}
            required
            onIonChange={(e) => {
              setIsNameValid((e.detail.value?.length || "") > 0);
              setName(e.detail.value || "");
            }}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Enter Email: </IonLabel>
          <IonInput
            inputMode="email"
            className="feedbackText"
            value={email}
            required
            onIonChange={(e) => {
              setIsEmailValid(verifyEmail(e.detail.value || ""));
              setEmail(e.detail.value || "");
            }}
            color={isEmailValid ? "success" : "danger"}
          ></IonInput>
        </IonItem>
        <IonItem lines="none">
          <IonLabel position="floating">Enter Your Message Below: </IonLabel>
          <IonTextarea
            inputMode="text"
            maxlength={500}
            className="feedbackText"
            rows={7}
            value={message}
            autoGrow={true}
            onIonChange={(e) => {
              setIsMessageValid((e.detail.value?.length || "") > 0);
              setMessage(e.detail.value || "");
            }}
          ></IonTextarea>
        </IonItem>
        <IonButton
          onClick={isAllValid}
          className="feedbackButton"
          size="large"
          expand="block"
        >
          Submit
        </IonButton>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        buttons={[
          {
            text: "Dismiss",
            role: "cancel",
          },
        ]}
        message={toastMessage}
        duration={autoDismissToast ? 3000 : undefined}
        position="middle"
      />
    </IonPage>
  );
};
