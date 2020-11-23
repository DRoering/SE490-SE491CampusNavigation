import React, { useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { Building, Lot, CampusEvent, Organization } from "../../DataProviders";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";

interface CampusMapProps {
  buildings: Building[] | false;
  events: CampusEvent[] | false;
  parkingLots: Lot[] | false;
  organizations: Organization[] | false;
  showName: boolean;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const position = L.latLng([45.5511, -94.1515]);
  const minimumZoom = 8;
  const zoom = 16;

  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const map = (
    <Map
      key={minimumZoom}
      center={position}
      zoom={zoom}
      minZoom={minimumZoom}
      id="campus-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.buildings && (
        <BuildingPin buildings={props.buildings} showName={props.showName} />
      )}
      {props.events && <EventPin events={props.events} />}
      {props.parkingLots && <ParkingLotPin parkingLots={props.parkingLots} />}
      {props.organizations && (
        <OrganizationPin organization={props.organizations} />
      )}
    </Map>
  );

  return <>{map}</>;
};
