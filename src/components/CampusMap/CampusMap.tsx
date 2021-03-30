import React, { useEffect, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { UserLocation } from "./Components";
import { IonAlert } from "@ionic/react";
import { Item, ItemOptions } from "../../Reuseable";

interface CampusMapProps {
  buildings: Item[] | false;
  events: Item[] | false;
  parkingLots: Item[] | false;
  organizations: Item[] | false;
  showName: boolean;
  position: { c: L.LatLng; z: number };
  userPosition: { c: L.LatLng; r: number };
  openDetails: (i: ItemOptions) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [navigationItem, setNavItem] = useState<Item>();
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const initiateNav = (i: Item) => {
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
      <IonAlert
        isOpen={showNavModal}
        onDidDismiss={() => setShowNavModal(false)}
        subHeader={`Navigate to ${navigationItem?.name}`}
        message={"Do you want to start navigation in native maps application?"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "Okay",
            handler: () => {
              console.log("Confirm Okay");
            },
          },
        ]}
      />
    </>
  );
};
