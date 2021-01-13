import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import {
  CampusMap as MapContent,
  HeaderBar,
  PinFilter,
} from "../../components";
import { Building, Lot, CampusEvent, Organization } from "../../DataProviders";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
  organizations: Organization[];
  position: { c: L.LatLng; z: number };
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showBuildings, setShowBuildings] = useState(true);
  const [showEvents, setShowEvents] = useState(false);
  const [showParking, setShowParking] = useState(false);
  const [showOrganization, setShowOrganization] = useState(false);

  const buildings = () => {
    setShowBuildings(true);
    setShowEvents(false);
    setShowParking(false);
    setShowOrganization(false);
  };

  const events = () => {
    setShowBuildings(false);
    setShowEvents(true);
    setShowParking(false);
    setShowOrganization(false);
  };

  const parking = () => {
    setShowBuildings(false);
    setShowEvents(false);
    setShowParking(true);
    setShowOrganization(false);
  };

  const organization = () => {
    setShowBuildings(false);
    setShowEvents(false);
    setShowParking(false);
    setShowOrganization(true);
  };

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <PinFilter
          showBuildings={buildings}
          showEvents={events}
          showParking={parking}
          showOrgs={organization}
        />
        <MapContent
          buildings={showBuildings && props.buildings}
          events={showEvents && props.events}
          parkingLots={showParking && props.parkingLots}
          organizations={showOrganization && props.organizations}
          showName={props.showName}
          position={props.position}
        />
      </IonContent>
    </IonPage>
  );
};
