import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import { Organization } from "../../DataProviders/useOrganization/Organization";

interface OrganizationListProps {
  organization: Organization[];
}

export const OrganizationList: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  return (
    <IonList>
      {props.organization.map((organizations) => (
        <IonCard key={organizations.id}>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="15">
                  <IonLabel>{organizations.name}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>{organizations.communication}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>{organizations.Officers}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
