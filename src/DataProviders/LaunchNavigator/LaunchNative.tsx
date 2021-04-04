import { LaunchNavigator } from "@ionic-native/launch-navigator";
import { Item } from "../../Reuseable";

export const NativeNavigate = (destination: Item) =>
  LaunchNavigator.navigate(destination.name).then(
    (success) => console.log("Launched successfully"),
    (error) => console.log("Failed to launch")
  );
