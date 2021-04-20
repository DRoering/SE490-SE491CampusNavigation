import { LaunchNavigator } from "@ionic-native/launch-navigator";

export const NativeNavigate = (destination: string) =>
  LaunchNavigator.navigate(destination).then(
    (success) => console.log("Launched successfully"),
    (error) => console.log("Failed to launch")
  );
