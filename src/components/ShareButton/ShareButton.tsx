import { IonButton, IonIcon, IonActionSheet } from "@ionic/react";
import { share } from "ionicons/icons";
import React, { useState } from "react";
import { Item } from "../../Reuseable";
import "./ShareButton.scss";
import { ShareProvider } from "../../DataProviders";

interface ShareButtonProps {
  class: string;
  id: string;
  iconId: string;
  expand: boolean;
  fill: boolean;
  shareItem: Item;
}

export const ShareButton: React.FC<ShareButtonProps> = (
  props: ShareButtonProps
) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  return (
    <>
      <IonButton
        class={props.class}
        id={props.id}
        expand={props.expand ? "block" : undefined}
        fill={props.fill ? "solid" : "clear"}
        onClick={() => setShowActionSheet(true)}
      >
        <IonIcon color="dark" id={props.iconId} icon={share}></IonIcon>
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Share Website Link",
            handler: () => {
              ShareProvider({
                title: `${props.shareItem.type} website link`,
                text: `The following link contains information for the ${props.shareItem.type}`,
                url: props.shareItem.webSite,
                dialogTitle: `Sharing ${props.shareItem.type} Web`,
              });
              console.log("Share Website Link clicked");
            },
          },
          {
            text: `Share Location`,
            handler: () => {
              ShareProvider({
                title: `${props.shareItem.type} location link`,
                text: `The following link contains navigation information for the ${props.shareItem.type}`,
                url: `http://google.com/maps/dir/?api=1&destination=${props.shareItem.name}`,
                dialogTitle: `Sharing ${props.shareItem.type} Location`,
              });
              console.log("Share Item Location clicked");
            },
          },
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      ></IonActionSheet>
    </>
  );
};
