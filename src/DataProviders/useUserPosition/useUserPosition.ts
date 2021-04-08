import { Geolocation } from "@ionic-native/geolocation";
import L from "leaflet";
import { useEffect, useState } from "react";

export const useUserPosition = (): [L.LatLng, () => void] => {
  const [userLocation, setUserLocation] = useState(
    L.latLng([45.551613, -94.148977])
  );

  const locate = async () => {
    const locale = await Geolocation.getCurrentPosition();

    setUserLocation(
      L.latLng([locale.coords.latitude, locale.coords.longitude])
    );

    console.log(locale);
  };

  useEffect(() => {
    locate();
  }, []);

  return [userLocation, locate];
};
