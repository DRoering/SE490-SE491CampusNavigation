import { IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { Organization } from "../../DataProviders";
import { ModalHeader } from "../";

interface OrganizationModalProps {
  organization: Organization;
  close: () => void;
}

export const BuildingModal: React.FC<OrganizationModalProps> = (
  props: OrganizationModalProps
) => {
  return (
    <>
      <ModalHeader close={props.close} title={props.organization.name} />
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>{props.organization.building}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
