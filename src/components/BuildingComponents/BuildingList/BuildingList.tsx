import React from "react";
import { FilterType, SortType } from "../../../DataProviders";
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
import { Item, ItemOptions } from "../../../Reuseable";
import { share } from "ionicons/icons";
import "./BuildingList.scss";

interface BuildingListProps {
  buildings: Item[];
  openDetails: (d: ItemOptions) => void;
  sortAlgorithm: SortType;
  filterAlgorithm?: FilterType;
}

// filter first, then perform the sort - may need to move resort inside of filter - use callback
const reFilter = (buildings: Item[], filterF: (a: Item) => boolean) =>
  buildings.filter(filterF);

const reSort = (buildings: Item[], sort: (a: Item, b: Item) => number) =>
  buildings.sort(sort);

export const BuildingList: React.FC<BuildingListProps> = (
  props: BuildingListProps
) => {
  const resortedList = props.filterAlgorithm
    ? reFilter(
        reSort(props.buildings, props.sortAlgorithm.function),
        props.filterAlgorithm?.function
      )
    : reSort(props.buildings, props.sortAlgorithm.function);

  return (
    <IonGrid>
      <IonRow>
        {resortedList.map((building) => (
          <IonCol key={building.id} size="4" sizeXs="6">
            <IonButton fill="clear" id="share-button">
              <IonIcon color="dark" id="ion-icon-share" icon={share}></IonIcon>
            </IonButton>
            <IonCard onClick={() => props.openDetails({ b: building })}>
              <img
                ion-img-cache="true"
                src={building.imgUrl}
                alt={building.name}
              />
              <IonCardContent>
                <IonLabel id="card-title">{`${building.name} (${building.abbreviation})`}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
