import {
  IonCard,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from "@ionic/react";
import React from "react";
import { Organization } from "../../../DataProviders";
import { ModalHeader } from "../..";

interface OrganizationModalProps {
  organization: Organization;
  close: () => void;
}

export const OrganizationModal: React.FC<OrganizationModalProps> = (
  props: OrganizationModalProps
) => {
  return (
    <>
      <ModalHeader close={props.close} />
      <IonContent>
        <IonItem className="app-fonts" id="item-info">
          <IonLabel id="title">{`${props.organization.name} `}</IonLabel>
        </IonItem>
        <IonCard id="img-card">
          <img
            ion-img-cache="true"
            src={props.organization.imgUrl}
            alt={`${props.organization.name}`}
          />
        </IonCard>
        <IonList>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Description</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.description}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title"> President </IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.president}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Advisor</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.advisor}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Communication</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.communication}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Apllication</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.application}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Location</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.organization.location}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
