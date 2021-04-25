import {
  IonButton,
  IonCard,
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from "@ionic/react";
import React from "react";
import { ModalHeader, NavigationButton } from "../..";
import { Item } from "../../../Reuseable";

interface OrganizationModalProps {
  close: () => void;
  organization: Item;
}

export const OrganizationModal: React.FC<OrganizationModalProps> = (
  props: OrganizationModalProps
) => {
  return (
    <>
      <ModalHeader close={props.close} title="Organization Details" />
      <IonContent>
        <IonItem className="app-fonts" id="item-info" lines="full">
          <IonLabel
            className="ion-text-wrap"
            id="title"
          >{`${props.organization.name} `}</IonLabel>
          {props.organization.application && (
            <IonButton
              href={props.organization.application}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IonLabel className="ion-text-wrap">Want to Join?</IonLabel>
            </IonButton>
          )}
        </IonItem>
        <IonCard id="img-card">
          <img
            ion-img-cache="true"
            src={props.organization.imgUrl}
            alt={`${props.organization.name}`}
          />
        </IonCard>
        <IonButton
          href={props.organization.webSite}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          expand="block"
          disabled={!props.organization.webSite ? true : false}
        >
          <IonLabel>Organization Website</IonLabel>
        </IonButton>
        <NavigationButton navigationItem={props.organization} isPin={false} />
        <IonList>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Description</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info" lines="full">
            <IonLabel className="ion-text-wrap">
              {props.organization.description || "Unavailable"}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title"> President </IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info" lines="full">
            <IonLabel className="ion-text-wrap">
              {props.organization.president || "Unavailable"}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Advisor</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info" lines="full">
            <IonLabel className="ion-text-wrap">
              {props.organization.advisor || "Unavailable"}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Communication</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info" lines="full">
            <IonLabel className="ion-text-wrap">
              {props.organization.communication || "Unavailable"}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Location</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info" lines="full">
            <IonLabel className="ion-text-wrap">
              {props.organization.building
                ? `${props.organization.building} ${
                    props.organization.room || ""
                  }`
                : "Unavailable"}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
