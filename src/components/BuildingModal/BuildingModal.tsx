import { IonCard, IonContent, IonItem, IonLabel, IonList } from "@ionic/react";
import React from "react";
import { Building } from "../../DataProviders";
import { ModalHeader } from "../";

interface BuildingModalProps {
  building: Building;
  close: () => void;
}

export const BuildingModal: React.FC<BuildingModalProps> = (
  props: BuildingModalProps
) => {
  return (
    <>
      <ModalHeader close={props.close} title={props.building.name} />
      <IonContent>
        <IonCard>
          <img ion-img-cache="true" src={props.building.img} />
        </IonCard>
        <IonList>
          <IonItem>
            <IonLabel>{props.building.abbreviation}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};
