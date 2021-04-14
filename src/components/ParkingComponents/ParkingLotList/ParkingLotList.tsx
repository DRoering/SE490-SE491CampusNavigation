import React, { useState, useEffect } from "react";
import { FilterType, SortType } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "./ParkingLotList.scss";
import { Item } from "../../../Reuseable";
import { ItemListSkeleton } from "../../SkeletonText";

interface ParkingLotProps {
  parkingLots: Item[];
  sortAlgorithm: SortType;
  filterAlgorithm?: FilterType;
  lotType?: string;
}

const reFilter = (
  parkingLots: Item[],
  filter: (i: Item, categories?: string[], type?: string) => boolean,
  type: string
) => {
  const temp: Item[] = [];
  parkingLots.forEach((lot) => {
    if (filter(lot, undefined, type)) temp.push(lot);
  });
  return temp;
};

const reSort = (parkingLots: Item[], sort: (a: Item, b: Item) => number) =>
  parkingLots.sort(sort);

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const [data, setData] = useState(false);
  const sortedLots = props.filterAlgorithm
    ? reFilter(
        reSort(props.parkingLots, props.sortAlgorithm.function),
        props.filterAlgorithm.function,
        props.lotType || ""
      )
    : reSort(props.parkingLots, props.sortAlgorithm.function);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  });

  return (
    <IonContent>
      {data ? (
        <IonGrid>
          <IonRow>
            {sortedLots.map((parkingLots) => (
              <IonCol key={parkingLots.id} size="4" sizeXs="6">
                <IonCard>
                  <IonCardContent>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonItemDivider className="app-fonts" id="item-info">
                            <IonLabel id="title">Lot Name</IonLabel>
                          </IonItemDivider>
                          <IonItem>{parkingLots.designation}</IonItem>
                          <IonItemDivider className="app-fonts" id="item-info">
                            <IonLabel id="title">Lot Type</IonLabel>
                          </IonItemDivider>
                          <IonItem>{parkingLots.type}</IonItem>
                          <IonItemDivider className="app-fonts" id="item-info">
                            <IonLabel id="title">Pay Rate</IonLabel>
                          </IonItemDivider>
                          <IonItem className="ion-text-wrap" id="item-info">
                            {parkingLots.rate}
                          </IonItem>
                        </IonCol>
                      </IonRow>
                    </IonGrid>
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
