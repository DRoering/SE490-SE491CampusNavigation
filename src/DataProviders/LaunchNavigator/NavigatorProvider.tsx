import { isPlatform } from "@ionic/react";
import { BrowserNavigate } from "./LaunchBrowser";
import { NativeNavigate } from "./LaunchNative";

export function NavigatorProvider(destination: string) {
  return isPlatform("hybrid")
    ? NativeNavigate(destination)
    : BrowserNavigate(destination);
}
