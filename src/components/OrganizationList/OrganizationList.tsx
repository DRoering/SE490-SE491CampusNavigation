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
      {props.organization.map((organization) => (
        <IonCard key={organization.name}>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="15">
                  <IonLabel>{organization.id}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="15">
                  <IonLabel>{organization.communication}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonLabel>{organization.Officers}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
