import { LaunchNavigator } from "@ionic-native/launch-navigator";
import { Building } from "..";

interface LaunchNavigatorProps {
  destination: Building;
  userLocation: L.LatLng;
}

export const NativeNavigate = (props: LaunchNavigatorProps) =>
  LaunchNavigator.navigate(props.destination.name).then(
    (success) => console.log("Launched successfully"),
    (error) => console.log("Failed to launch")
  );
