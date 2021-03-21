import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import {
  OrganizationFilter,
  Organization,
  SortType,
} from "../../../DataProviders";
import { ItemOptions } from "../../../Reuseable";

interface OrganizationListProps {
  organizations: Organization[];
  openDetails: (o: ItemOptions) => void;
  sortAlgorithm: SortType;
  categoryFilter: string[];
  filterAlgorithm?: OrganizationFilter;
}

const reFilter = (orgs: Organization[], filter: (a: Organization) => boolean) =>
  orgs.filter(filter);

const reSort = (
  orgs: Organization[],
  sort: (a: Organization, b: Organization) => number
) => orgs.sort(sort);

export const OrganizationList: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  const resortedList = props.filterAlgorithm
    ? reFilter(
        reSort(props.organizations, props.sortAlgorithm.function),
        props.filterAlgorithm.function
      )
    : reSort(props.organizations, props.sortAlgorithm.function);

  return (
    <IonGrid>
      <IonRow>
        {resortedList.map((organization) => (
          <IonCol key={organization.id} sizeXs="6">
            <IonCard onClick={() => props.openDetails({ o: organization })}>
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
