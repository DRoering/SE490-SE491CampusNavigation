import {
  IonItem,
  IonCard,
  IonCardHeader,
  IonLabel,
  IonButton,
  IonIcon,
  IonCardContent,
  IonTextarea,
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
    <IonItem ref={cardRef}>
      <IonCard>
        <img src={props.imgUrl} />
        <IonCardHeader>
          <IonItem lines="none">
            <IonLabel slot="start" id="title">
              {props.title}
            </IonLabel>
            <IonButton slot="end" onClick={expandCard} fill="clear">
              <IonIcon icon={isExpanded ? chevronUp : chevronDown} />
            </IonButton>
          </IonItem>
        </IonCardHeader>
        <IonCardContent id={`toggle-${toggleOpen()}`}>
          <IonTextarea className="app-fonts" readonly={true}>
            {props.information}
          </IonTextarea>
        </IonCardContent>
      </IonCard>
    </IonItem>
  );
};
