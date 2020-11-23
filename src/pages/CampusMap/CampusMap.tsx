import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import {
  CampusMap as MapContent,
  HeaderBar,
  PinFilter,
} from "../../components";
import { Building, Lot, CampusEvent } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showBuildings, setShowBuildings] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showParking, setShowParking] = useState(false);

  const buildings = () => {
    setShowBuildings(true);
    setShowEvents(false);
    setShowParking(false);
  };

  const events = () => {
    setShowBuildings(false);
    setShowEvents(true);
    setShowParking(false);
  };

  const parking = () => {
    setShowBuildings(false);
    setShowEvents(false);
    setShowParking(true);
  };

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <PinFilter
          showBuildings={buildings}
          showEvents={events}
          showParking={parking}
        />
        <MapContent
          buildings={showBuildings && props.buildings}
          events={showEvents && props.events}
          parkingLots={showParking && props.parkingLots}
          showName={props.showName}
        />
      </IonContent>
    </IonPage>
  );
};
