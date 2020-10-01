import { IonContent, IonModal, IonPage } from "@ionic/react";
import React, { useState } from "react";
import { BuildingList, BuildingModal } from "../../components";
import { Building } from "../../DataProviders";

interface BuildingsProps {
  buildings: Building[];
}

export const Buildings: React.FC<BuildingsProps> = (props: BuildingsProps) => {
  const [buildingDetails, setBuildingDetails] = useState<Building>();
  const [showModal, setShowModal] = useState(false);

  const openDetails = (d: Building) => {
    setBuildingDetails(d);
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonContent>
        <BuildingList buildings={props.buildings} openDetails={openDetails} />
      </IonContent>
      {buildingDetails && (
        <IonModal isOpen={showModal}>
          <BuildingModal
            building={buildingDetails}
            close={() => setShowModal(false)}
          />
        </IonModal>
      )}
    </IonPage>
  );
};
