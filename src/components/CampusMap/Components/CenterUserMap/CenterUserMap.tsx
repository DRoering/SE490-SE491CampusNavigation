import React, { useEffect, useState } from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { navigateCircleOutline } from "ionicons/icons";
import { UserLocation } from "../UserLocation";
import { Geolocation } from "@ionic-native/geolocation";

interface CenterUserMapProps {
  showUserlocation: () => void;
}
export const CenterUserMap: React.FC<CenterUserMapProps> = (
  props: CenterUserMapProps
) => (
  <IonFab horizontal="end" vertical="bottom" slot="fixed">
    <IonFabButton onClick={props.showUserlocation}>
      <IonIcon icon={navigateCircleOutline} />
    </IonFabButton>
  </IonFab>
);
