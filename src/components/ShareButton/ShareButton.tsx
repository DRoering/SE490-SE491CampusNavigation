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
  const getShareObject = (itemUrl: string) => ({
    title: `Sharing ${props.shareItem.name}`,
    text: `The following link contains information for ${props.shareItem.name}`,
    url: itemUrl,
    dialogTitle: `Sharing ${props.shareItem.name}`,
  });
  const getShareButtons = () => {
    const buttons: { text: string; handler: () => void; role?: string }[] = [];
    if (props.shareItem.webSite) {
      buttons.push({
        text: "Share Website Link",
        handler: () => {
          ShareProvider(getShareObject(props.shareItem.webSite || ""));
        },
      });
    }
    buttons.push(
      ...[
        {
          text: `Share Location`,
          handler: () => {
            ShareProvider(
              getShareObject(
                `http://google.com/maps/dir/?api=1&destination=${props.shareItem.name}`
              )
            );
          },
        },
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ]
    );
    return buttons;
  };

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
        buttons={getShareButtons()}
      ></IonActionSheet>
    </>
  );
};
