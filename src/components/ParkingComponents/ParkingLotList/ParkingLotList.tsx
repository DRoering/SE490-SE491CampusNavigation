import React from "react";
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
import { ItemListSkeleton, ShareButton } from "../../";

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
  const sortedLots = props.filterAlgorithm
    ? reFilter(
        reSort(props.parkingLots, props.sortAlgorithm.function),
        props.filterAlgorithm.function,
        props.lotType || ""
      )
    : reSort(props.parkingLots, props.sortAlgorithm.function);

  return (
    <IonContent>
      {props.parkingLots[0] ? (
        <IonGrid>
          <IonRow>
            {sortedLots.map((lot) => (
              <IonCol key={lot.id} size="4" sizeXs="6">
                <IonCard class="card-background">
                  <IonCardContent>
                    <ShareButton
                      id="share-button"
                      class="none"
                      iconId="ion-icon-share"
                      expand={false}
                      fill={false}
                      shareItem={lot}
                    />
                    <IonRow>
                      <IonCol>
                        <IonItemDivider className="app-fonts" id="item-info">
                          <IonLabel id="title">Lot Name</IonLabel>
                        </IonItemDivider>
                        <IonItem>{lot.designation}</IonItem>
                        <IonItemDivider className="app-fonts" id="item-info">
                          <IonLabel id="title">Lot Type</IonLabel>
                        </IonItemDivider>
                        <IonItem>{lot.type}</IonItem>
                        <IonItemDivider className="app-fonts" id="item-info">
                          <IonLabel id="title">Pay Rate</IonLabel>
                        </IonItemDivider>
                        <IonItem className="ion-text-wrap" id="item-info">
                          {lot.rate}
                        </IonItem>
                      </IonCol>
                    </IonRow>
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
