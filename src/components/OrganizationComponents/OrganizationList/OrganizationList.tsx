import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";

interface OrganizationListProps {
  organizations: Item[];
  openDetails: (o: ItemOptions) => void;
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
            <IonCard onClick={() => props.openDetails({ o: organization })}>
              <img
                alt="Organization"
                ion-img-cache="true"
                src={organization.imgUrl}
              />
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
