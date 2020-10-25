import React, { useEffect } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { Building, Lot, CampusEvent } from "../../DataProviders";
import { BuildingPin, ParkingLotPin, EventPin } from "./components";

interface CampusMapProps {
  buildings: Building[];
  showName: boolean;
  parkingLots: Lot[];
  events: CampusEvent[];
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const position = L.latLng([45.5511, -94.1515]);
  const minimumZoom = 8;
  const zoom = 16;
  const buildingIcon = L.icon({
    iconUrl: "assets/mapIcons/businessIcon.png",
    iconSize: [25, 25],
  });

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
      <BuildingPin buildings={props.buildings} showName={props.showName} />
      {props.buildings.map((building) => (
        <Marker
          key={building.id}
          position={building.coordinates}
          icon={buildingIcon}
        ></Marker>
      ))}
      <ParkingLotPin parkingLots={props.parkingLots} />
      <EventPin events={props.events}></EventPin>
      ))
    </Map>
  );

  return <>{map}</>;
};
