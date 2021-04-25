import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { FilterType, SortType } from "../../../DataProviders";
import { Item, ItemOptions } from "../../../Reuseable";
import { ItemListSkeleton, ShareButton } from "../..";

interface OrganizationListProps {
  categoryFilter: string[];
  filterAlgorithm?: FilterType;
  organizations: Item[];
  openDetails: (o: ItemOptions) => void;
  sortAlgorithm: SortType;
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
    <IonContent>
      {props.organizations[0] ? (
        <IonGrid>
          <IonRow>
            {resortedList.map((organization) => (
              <IonCol key={organization.id} sizeXs="6">
                <ShareButton
                  id="share-button"
                  class="none"
                  iconId="ion-icon-share"
                  expand={false}
                  fill={false}
                  shareItem={organization}
                />
                <IonCard
                  class="card-background"
                  onClick={() => props.openDetails({ o: organization })}
                >
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
      ) : (
        <>
          <ItemListSkeleton />
        </>
      )}
    </IonContent>
  );
};
