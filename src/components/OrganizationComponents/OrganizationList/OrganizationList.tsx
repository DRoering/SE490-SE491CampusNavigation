import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Organization, SortType } from "../../../DataProviders";

interface OrganizationListProps {
  organizations: Organization[];
  openModal: (o: Organization) => void;
  sortAlgorithm: SortType;
}

export const OrganizationList: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  return (
    <IonGrid>
      <IonRow>
        {props.organizations.map((organization) => (
          <IonCol key={organization.id} sizeXs="6">
            <IonCard onClick={() => props.openModal(organization)}>
              <img ion-img-cache="true" src={organization.imgUrl} />
              <IonCardContent>
                <IonLabel>{organization.name}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
