import { useState } from "react";
import { StringLiteralLike } from "typescript";
import {
  launchnavigator,
  LaunchNavigator,
  LaunchNavigatorOptions,
} from "uk.co.workingedge.phonegap.plugin.launchnavigator";

interface LaunchNavigatorProps {
  start: [];
  destination: [];
}

export const Navigate = (props: LaunchNavigatorProps) => {
  // const [error, setError] = useState(true);
  // const [success, setSuccess] = useState(true);
  launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (
    isAvailable
  ) {
    let app: string;
    if (isAvailable) {
      app = launchnavigator.APP.GOOGLE_MAPS;
    } else {
      console.log(
        "Google maps is not available -- Falling back to user selection"
      );
      app = launchnavigator.APP.APPLE_MAPS;
    }

    const options: LaunchNavigatorOptions = {
      start: props.start,
      app: app,
    };

    launchnavigator.navigate(props.destination, options).then(
      (success) => {
        console.log(success);
      },
      (error) => {
        console.log(error);
      }
    );
  });
};
