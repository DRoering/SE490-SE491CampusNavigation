import { isPlatform } from "@ionic/react";
import { Item } from "../../Reuseable";
import { BrowserNavigate } from "./LaunchBrowser";
import { NativeNavigate } from "./LaunchNative";

export function NavigatorProvider(destination: Item) {
  return isPlatform("hybrid")
    ? NativeNavigate(destination)
    : BrowserNavigate(destination);
}
