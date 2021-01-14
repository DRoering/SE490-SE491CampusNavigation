import React, { useEffect, useState } from "react";
import { Geolocation } from "@ionic-native/geolocation";
import { Marker } from "react-leaflet";
import L from "leaflet";

export const UserLocation: React.FC = () => {
  const userIcon = L.icon({
    iconUrl: "assets/mapIcons/navigateSharp.png",
    iconSize: [25, 25],
    popupAnchor: [0, -7],
  });
  const [location, setLocation] = useState<L.LatLng>(L.latLng([0, 0]));
  const locate = async () => {
    const locale = await Geolocation.getCurrentPosition();

    setLocation(L.latLng([locale.coords.latitude, locale.coords.longitude]));
  };

  useEffect(() => {
    locate();
  }, []);

  return <Marker position={location} icon={userIcon} />;
};
