import {
  IonCard,
  IonCardHeader,
  IonButton,
  IonIcon,
  IonCardContent,
  IonText,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonRow,
} from "@ionic/react";
import { chevronUp, chevronDown } from "ionicons/icons";
import React, { useRef, useState } from "react";

interface AboutCardProps {
  title: string;
  information: string;
  imgUrl: string;
}

export const AboutCard: React.FC<AboutCardProps> = (props: AboutCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleOpen = () => (isExpanded ? "open" : "closed");

  const cardRef = useRef<HTMLIonItemElement>(null);

  const expandCard = () => {
    setIsExpanded(!isExpanded);
    setTimeout(() =>
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      })
    );
  };

  return (
    <IonCard className="information-card" ref={cardRef}>
      <img alt="Generic visual for the type of card" src={props.imgUrl} />
      <IonCardHeader>
        <IonRow>
          <IonCol size="11" id="about-title">
            <IonCardTitle className="card-title">
              <strong>{props.title}</strong>
            </IonCardTitle>
          </IonCol>
          <IonCol size="1">
            <IonButtons>
              <IonButton
                size="small"
                slot="end"
                onClick={expandCard}
                fill="clear"
              >
                <IonIcon icon={isExpanded ? chevronUp : chevronDown} />
              </IonButton>
            </IonButtons>
          </IonCol>
        </IonRow>
      </IonCardHeader>
      <IonCardContent id={`toggle-${toggleOpen()}`}>
        <IonText className="app-fonts">{props.information}</IonText>
      </IonCardContent>
    </IonCard>
  );
};
