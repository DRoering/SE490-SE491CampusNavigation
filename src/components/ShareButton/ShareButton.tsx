import { IonButton, IonIcon } from "@ionic/react";
import { share } from "ionicons/icons";
import React from "react";
import { Item } from "../../Reuseable";
import "./ShareButton.scss";

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
  return (
    <IonButton
      class={props.class}
      id={props.id}
      expand={props.expand ? "block" : undefined}
      fill={props.fill ? "solid" : "clear"}
    >
      <IonIcon color="dark" id={props.iconId} icon={share}></IonIcon>
    </IonButton>
  );
};
