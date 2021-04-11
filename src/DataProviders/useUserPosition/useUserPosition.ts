import { Geolocation } from "@ionic-native/geolocation";
import L from "leaflet";
import { useEffect, useState } from "react";

export const useUserPosition = (): [
  L.LatLng,
  () => void,
  () => NodeJS.Timeout
] => {
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

  const manualRefresh = () => {
    console.log("Manual refresh started");
    return setTimeout(() => {
      console.log("Manual refresh occured");
      locate();
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

  return [userLocation, locate, manualRefresh];
};
