import { IonButton, IonIcon, IonAlert, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { Item } from "../../Reuseable";
import { NavigatorProvider } from "../../DataProviders";
import { navigateCircle } from "ionicons/icons";

interface NavigationButtonProps {
  isPin: boolean;
  navigationItem: Item;
}

export const NavigationButton: React.FC<NavigationButtonProps> = (
  props: NavigationButtonProps
) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [destination, setDestination] = useState("");
  const [isNavigable, setIsNavigable] = useState(true);

  const getDestination = () => {
    if (props.navigationItem.address)
      setDestination(props.navigationItem.address + " St Cloud");
    else if (props.navigationItem.building)
      setDestination(
        "St. Cloud State University " + props.navigationItem.building
      );
    else if (props.navigationItem.name)
      setDestination("St. Cloud State University " + props.navigationItem.name);
    else return false;
    return true;
  };

  const initiateNav = () => {
    setShowNavModal(true);
    setIsNavigable(getDestination());
  };

  return (
    <>
      <IonButton
        class={props.isPin ? "ion-no-margin" : undefined}
        id={props.isPin ? "navigate-button-pin" : undefined}
        color={props.isPin ? "tertiary" : undefined}
        expand="block"
        onClick={() => initiateNav()}
      >
        {props.isPin ? (
          <IonIcon icon={navigateCircle} id="ion-icon-pin" />
        ) : (
          <IonLabel>Navigate Here</IonLabel>
        )}
      </IonButton>
      {isNavigable ? (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`Navigate to ${props.navigationItem.name}`}
          message={
            "Do you want to start navigation in native maps application?"
          }
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
            },
            {
              text: "Okay",
              handler: () => {
                NavigatorProvider(destination);
              },
            },
          ]}
        />
      ) : (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`We've ran into an issue`}
          message={
            "We lack information necessary to route you to this location."
          }
          buttons={[
            {
              text: "Ok",
              role: "cancel",
            },
          ]}
        />
      )}
    </>
  );
};
