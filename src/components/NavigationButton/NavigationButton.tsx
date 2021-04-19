import { IonButton, IonIcon, IonAlert, IonLabel } from "@ionic/react";
import React, { useState } from "react";
import { Item } from "../../Reuseable";
import { NavigatorProvider } from "../../DataProviders";
import { navigateCircle } from "ionicons/icons";

interface NavigationButtonProps {
  navigationItem: Item;
  isPin: boolean;
}

export const NavigationButton: React.FC<NavigationButtonProps> = (
  props: NavigationButtonProps
) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [navigationItem, setNavItem] = useState<Item>();

  const initiateNav = (i: Item) => {
    console.log(i);
    setNavItem(i);
    setShowNavModal(true);
  };

  return (
    <>
      <IonButton
        class={props.isPin ? "ion-no-margin" : undefined}
        id={props.isPin ? "navigate-button-pin" : undefined}
        color={props.isPin ? "tertiary" : undefined}
        expand="block"
        onClick={() => initiateNav(props.navigationItem)}
      >
        {props.isPin ? (
          <IonIcon icon={navigateCircle} id="ion-icon-pin" />
        ) : (
          <IonLabel>Navigate Here</IonLabel>
        )}
      </IonButton>
      {navigationItem?.coordinates ? (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`Navigate to ${navigationItem?.name}`}
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
                NavigatorProvider(navigationItem);
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
            "We lack information necessary to route you to this location. Please check that your location is on"
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
