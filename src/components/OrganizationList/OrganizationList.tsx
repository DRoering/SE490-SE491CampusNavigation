import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Organization } from "../../DataProviders";

interface OrganizationListProps {
  organization: Organization[];
  openModal: (o: Organization) => void;
}

export const OrganizationList: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  return (
    <IonGrid>
      <IonRow>
        {props.organization.map((organization) => (
          <IonCol key={organization.id} sizeXs="6">
            <IonCard onClick={() => props.openModal(organization)}>
              <IonCardContent>
                <IonLabel>{organization.name}</IonLabel>
                <IonLabel>{organization.communication}</IonLabel>
                <IonLabel>{organization.officers}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
