import React from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from "@ionic/react";
import { ModalHeader, NavigationButton } from "../..";
import "./EventModal.scss";
import { Item } from "../../../Reuseable";

interface EventModalProps {
  event: Item;
  closeAction: () => void;
  viewItem?: (i: Item) => void;
}

export const EventModal: React.FC<EventModalProps> = (
  props: EventModalProps
) => {
  return (
    <>
      <ModalHeader close={props.closeAction} title={"Event Details"} />
      <IonContent>
        <IonItem className="app-fonts" id="item-info">
          <IonLabel className="ion-text-wrap" id="title">
            {props.event.name}
          </IonLabel>
          {props.event.rsvpLink ? (
            <IonButton
              href={props.event.rsvpLink}
              target="_blank"
              rel="noopener noreferrer"
              expand="block"
            >
              <IonLabel className="app-fonts">RSVP to Event</IonLabel>
            </IonButton>
          ) : (
            <IonLabel className="app-fonts">RSVP not required</IonLabel>
          )}
        </IonItem>
        <IonCard id="img-card">
          <img
            ion-img-cache="true"
            src={`${props.event.source}${props.event.imgUrl}`}
            alt="Event"
          />
        </IonCard>
        <IonList>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel id={`is-${props.event.isPublic ? "open" : "closed"}`}>
              {props.event.isPublic
                ? "Open to the public"
                : "Closed to the public"}
            </IonLabel>
          </IonItem>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel>
              Starts at: {props.event.startDate.format("MM/DD/YY hh:mm a")}
            </IonLabel>
          </IonItem>
          <NavigationButton navigationItem={props.event} isPin={false} />
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Description</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.event.description ||
                "A description is unavailable for this event"}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Additional Information</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.event.additionalInfo}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Host Organization</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            {props.event.hostUrl ? (
              <a
                href={props.event.hostUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonLabel className="ion-text-wrap">
                  {props.event.host}
                </IonLabel>
              </a>
            ) : (
              <IonLabel className="ion-text-wrap">{props.event.host}</IonLabel>
            )}
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
