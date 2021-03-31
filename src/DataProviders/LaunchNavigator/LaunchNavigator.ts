import { useState } from "react";
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
  launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (
    isAvailable
  ) {
    let app: string;
    if (isAvailable) {
      app = launchnavigator.APP.GOOGLE_MAPS;
    } else {
      console.warn(
        "Google Maps not available - falling back to user selection"
      );
      app = launchnavigator.APP.USER_SELECT;
    }
    launchnavigator.navigate(props.destination, {
      app: app,
    });
  });
};

// export const Navigate = (props: LaunchNavigatorProps) => {
//   // const [error, setError] = useState(true);
//   // const [success, setSuccess] = useState(true);
//   launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (
//     isAvailable
//   ) {
//     let app: string;
//     if (isAvailable) {
//       app = launchnavigator.APP.GOOGLE_MAPS;
//     } else {
//       console.log(
//         "Google maps is not available -- Falling back to user selection"
//       );
//       app = launchnavigator.APP.APPLE_MAPS;
//     }

//     const options: LaunchNavigatorOptions = {
//       start: props.start,
//       app: app,
//     };

//     launchnavigator
//       .navigate(props.destination, options)
//       .then(() => console.log("Launched navigator"))
//       .catch((err) => console.error("Error launching navigator: " + err));
//   });
// };
