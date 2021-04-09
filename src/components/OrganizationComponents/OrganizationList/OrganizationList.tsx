import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { FilterType, SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";
import { share } from "ionicons/icons";

interface OrganizationListProps {
  organizations: Item[];
  openDetails: (o: ItemOptions) => void;
  sortAlgorithm: SortType;
  categoryFilter: string[];
  filterAlgorithm?: FilterType;
}

const reFilter = (
  orgs: Item[],
  filter: (a: Item, categories?: string[]) => boolean,
  categories: string[]
) => {
  const temp: Item[] = [];
  orgs.forEach((org) => {
    if (filter(org, categories)) temp.push(org);
  });
  return temp;
};

const reSort = (orgs: Item[], sort: (a: Item, b: Item) => number) =>
  orgs.sort(sort);

export const OrganizationList: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  const resortedList = props.filterAlgorithm
    ? reFilter(
        reSort(props.organizations, props.sortAlgorithm.function),
        props.filterAlgorithm.function,
        props.categoryFilter
      )
    : reSort(props.organizations, props.sortAlgorithm.function);

  return (
    <IonGrid>
      <IonRow>
        {resortedList.map((organization) => (
          <IonCol key={organization.id} sizeXs="6">
            <IonButton fill="clear" id="share-button">
              <IonIcon color="dark" id="ion-icon-share" icon={share}></IonIcon>
            </IonButton>
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
