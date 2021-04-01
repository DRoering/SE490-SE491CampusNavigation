import React from "react";
import { SortType } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonRow,
} from "@ionic/react";
import "./ParkingLotList.scss";
import { Item } from "../../../Reuseable";

interface ParkingLotProps {
  parkingLots: Item[];
  sortAlgorithm: SortType;
}

const reSort = (parkingLots: Item[], sort: (a: Item, b: Item) => number) =>
  parkingLots.sort(sort);

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const sortedLots = reSort(props.parkingLots, props.sortAlgorithm.function);
  return (
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
  );
};
