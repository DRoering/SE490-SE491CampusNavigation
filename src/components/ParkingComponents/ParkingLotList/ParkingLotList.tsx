import React from "react";
import { Lot, SortType } from "../../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";

interface ParkingLotProps {
  parkingLots: Lot[];
  openDetails: (p: Lot) => void;
  sortAlgorithm: SortType;
}

const reSort = (parkingLots: Lot[], sort: (a: Lot, b: Lot) => number) =>
  parkingLots.sort(sort);

export const ParkingLotList: React.FC<ParkingLotProps> = (
  props: ParkingLotProps
) => {
  const sortedLots = reSort(props.parkingLots, props.sortAlgorithm.function);
  return (
    <IonGrid>
      <IonRow>
        {sortedLots.map((parkingLots) => (
          <IonCol key={parkingLots.id}>
            <IonCard onClick={() => props.openDetails(parkingLots)}>
              <IonCardContent>
                <IonLabel>{parkingLots.name}</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  );
};
