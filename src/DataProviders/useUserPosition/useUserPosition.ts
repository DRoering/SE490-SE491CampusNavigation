import { Geolocation } from "@ionic-native/geolocation";
import L from "leaflet";
import { useEffect, useState } from "react";

export const useUserPosition = (): [
  L.LatLng,
  (c: () => void) => NodeJS.Timeout
] => {
  const [userLocation, setUserLocation] = useState<L.LatLng>(L.latLng([0, 0]));

  const locate = async () => {
    const locale = await Geolocation.getCurrentPosition();

    setUserLocation(
      L.latLng([locale.coords.latitude, locale.coords.longitude])
    );

    console.log(locale);
  };

  const manualRefresh = (c: () => void) => {
    console.log("Manual refresh started");
    return setTimeout(() => {
      console.log("Manual refresh occured");
      locate().then(() => c());
    }, 800);
  };

  useEffect(() => {
    locate().catch((error) => {
      console.log(error);
    });
    // setInterval(() => {
    //   console.log("Refreshing position");
    //   locate();
    // }, 100000);
  }, []);

  return [userLocation, manualRefresh];
};
