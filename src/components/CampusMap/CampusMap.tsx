import React, { useEffect, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import {
  Building,
  Lot,
  CampusEvent,
  Organization,
  NavigatorProvider,
} from "../../DataProviders";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { UserLocation } from "./Components";
import { IonAlert } from "@ionic/react";

interface CampusMapProps {
  buildings: Building[] | false;
  events: CampusEvent[] | false;
  parkingLots: Lot[] | false;
  organizations: Organization[] | false;
  showName: boolean;
  position: { c: L.LatLng; z: number };
  userPosition: { c: L.LatLng; r: number };
  openDetails: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [navigationItem, setNavItem] = useState<
    Building | CampusEvent | Lot | Organization
  >();
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const initiateNav = (i: Building | CampusEvent | Lot | Organization) => {
    console.log(i);
    setNavItem(i);
    setShowNavModal(true);
  };

  const map = (
    <Map
      key={minimumZoom}
      center={props.position.c}
      zoom={props.position.z}
      //minZoom={minimumZoom}
      id="campus-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="http://osm.org/copyright">&copy; OpenStreetMap</a> | <a href="https://www.targomo.com/developers/resources/attribution/" target="_blank">&copy; Targomo</a>'
      />
      {props.buildings && (
        <BuildingPin
          buildings={props.buildings}
          showName={props.showName}
          openDetails={props.openDetails}
          openNav={initiateNav}
        />
      )}
      {props.events && (
        <EventPin events={props.events} openDetails={props.openDetails} />
      )}
      {props.parkingLots && (
        <ParkingLotPin
          parkingLots={props.parkingLots}
          openDetails={props.openDetails}
        />
      )}
      {props.organizations && (
        <OrganizationPin organization={props.organizations} />
      )}
      {props.userPosition && <UserLocation userPosition={props.userPosition} />}
    </Map>
  );

  return (
    <>
      {map}
      {navigationItem?.coordinates && props.userPosition.c ? (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`Navigate to ${navigationItem?.name}`}
          message={
            "Do you want to start navigation in native maps application?"
          }
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
            },
            {
              text: "Okay",
              handler: () => {
                NavigatorProvider(navigationItem, props.userPosition.c);
              },
            },
          ]}
        />
      ) : (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`We've ran into an issue`}
          message={
            "We lack information necessary to route you to this location. Please check that your location is on"
          }
          buttons={[
            {
              text: "Ok",
              role: "cancel",
            },
          ]}
        />
      )}
    </>
  );
};
