import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

interface UserLocationProps {
  userPosition: { c: L.LatLng; r: number };
}

export const UserLocation: React.FC<UserLocationProps> = (
  props: UserLocationProps
) => {
  const userIcon = L.icon({
    iconUrl: "assets/mapIcons/navigateSharp.png",
    iconSize: [25, 25],
    popupAnchor: [0, -7],
  });

  return <Marker position={props.userPosition.c} icon={userIcon} />;
};
