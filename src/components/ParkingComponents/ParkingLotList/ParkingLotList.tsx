import React from "react";
import { FilterType, SortType } from "../../../DataProviders";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "./ParkingLotList.scss";
import { Item } from "../../../Reuseable";
import { share } from "ionicons/icons";

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
    <IonGrid>
      <IonRow>
        {sortedLots.map((parkingLots) => (
          <IonCol key={parkingLots.id} size="4" sizeXs="6">
            <IonButton fill="clear" id="share-button">
              <IonIcon color="dark" id="ion-icon-share" icon={share}></IonIcon>
            </IonButton>
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
  );
};
