import React from "react";
import { Building, FilterType, SortType } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { ItemOptions } from "../../../Reuseable";

interface BuildingListProps {
  buildings: Building[];
  openDetails: (d: ItemOptions) => void;
  sortAlgorithm: SortType;
  filterAlgorithm?: FilterType;
}

// filter first, then perform the sort - may need to move resort inside of filter - use callback
const reFilter = (buildings: Building[], filter: (a: Building) => boolean) =>
  buildings.filter(filter);

const reSort = (
  buildings: Building[],
  sort: (a: Building, b: Building) => number
) => buildings.sort(sort);

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
