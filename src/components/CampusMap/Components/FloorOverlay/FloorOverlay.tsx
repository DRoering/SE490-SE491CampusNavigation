import { IonFab, IonFabButton, IonIcon, IonItem, IonLabel } from "@ionic/react";
import { chevronUp, chevronDown } from "ionicons/icons";
import L from "leaflet";
import React, { useState } from "react";
import { ImageOverlay } from "react-leaflet";
import { BuildingFloor } from "../../../../DataProviders";
import "./FloorOverlay.scss";

interface FloorOverlayProps {
  buildingFloor: BuildingFloor;
  currentZoom: number;
  center: L.LatLng;
  closePopup: () => void;
}

export const FloorOverlay: React.FC<FloorOverlayProps> = (
  props: FloorOverlayProps
) => {
  const maxFloor = props.buildingFloor.floors.length;
  const originalBounds = props.buildingFloor.bounds;
  const [currentFloor, setCurrentFloor] = useState(
    props.buildingFloor.mainfloorposition
  );

  return (
    <>
      {props.buildingFloor.floorimages[currentFloor] && (
        <>
          <ImageOverlay
            url={props.buildingFloor.floorimages[currentFloor].url}
            bounds={
              props.currentZoom === 18 ? originalBounds.pad(1) : originalBounds
            }
          />
          <IonFab vertical="bottom" horizontal="start">
            <IonFabButton
              color="secondary"
              disabled={currentFloor === maxFloor - 1}
              onClick={() => setCurrentFloor(currentFloor + 1)}
            >
              <IonIcon icon={chevronUp} />
            </IonFabButton>
            <IonFabButton
              color="tertiary"
              disabled={currentFloor === 0}
              onClick={() => setCurrentFloor(currentFloor - 1)}
            >
              <IonIcon icon={chevronDown} />
            </IonFabButton>
          </IonFab>
          <IonItem id="floor-item">
            <IonLabel id="floor-label">Floor {currentFloor}</IonLabel>
          </IonItem>
        </>
      )}
    </>
  );
};
