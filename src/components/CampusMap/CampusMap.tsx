import React, { useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { Building } from "../../DataProviders";
import { BuildingPin } from "./components";

interface CampusMapProps {
  buildings: Building[];
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
      <BuildingPin buildings={props.buildings} />
    </Map>
  );

  return <>{map}</>;
};
