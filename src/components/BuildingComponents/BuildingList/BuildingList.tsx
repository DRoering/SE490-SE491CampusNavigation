import React, { useState, useEffect } from "react";
import { FilterType, SortType } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Item, ItemOptions } from "../../../Reuseable";
import { ItemListSkeleton } from "../../SkeletonText";

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
  const [data, setData] = useState(false);
  const resortedList = props.filterAlgorithm
    ? reFilter(
        reSort(props.buildings, props.sortAlgorithm.function),
        props.filterAlgorithm?.function
      )
    : reSort(props.buildings, props.sortAlgorithm.function);

  useEffect(() => {
    !props.buildings[0]
      ? setTimeout(() => {
          setData(true);
        }, 2000)
      : setData(true);
  }, []);

  return (
    <IonContent>
      {data ? (
        <>
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
        </>
      ) : (
        <>
          <ItemListSkeleton />
        </>
      )}
    </IonContent>
  );
};
