import { isPlatform } from "@ionic/react";
import { BrowserNavigate } from "./LaunchBrowser";
import { NativeNavigate } from "./LaunchNative";

export function NavigatorProvider(
  destination: L.LatLng,
  userLocation: L.LatLng
) {
  return isPlatform("hybrid")
    ? NativeNavigate({ destination, userLocation })
    : BrowserNavigate({ destination, userLocation });
}
