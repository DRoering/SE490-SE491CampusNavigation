import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { chevronUp, chevronDown } from "ionicons/icons";
import L from "leaflet";
import React, { useMemo, useState } from "react";
import { ImageOverlay } from "react-leaflet";
import { BuildingFloor } from "../../../../DataProviders";

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
  const originalBounds = L.latLngBounds([
    [props.buildingFloor.topLat, props.buildingFloor.topLong],
    [props.buildingFloor.bottomLat, props.buildingFloor.bottomLong],
  ]);
  const [currentFloor, setCurrentFloor] = useState(
    props.buildingFloor.mainfloorposition
  );
  const [imgBounds, setImgBounds] = useState(originalBounds);
  const [showFloor, setShowFloor] = useState(false);

  const updateBounds = (z: number) => {
    if (z === 18) {
      if (imgBounds === originalBounds) setImgBounds(originalBounds.pad(1));
    } else setImgBounds(originalBounds);
  };

  const shouldShowFloor = (z: number, c: L.LatLng) => {
    if (imgBounds.contains(c || ([0, 0] && z > 16))) {
      props.closePopup();
      setShowFloor(true);
    } else setShowFloor(false);
  };

  useMemo(() => {
    updateBounds(props.currentZoom);
    shouldShowFloor(props.currentZoom, props.center);
  }, [props.center, props.currentZoom]);

  return (
    <>
      {showFloor && (
        <>
          <ImageOverlay
            url={props.buildingFloor.floorimages[currentFloor].url}
            bounds={imgBounds}
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
        </>
      )}
    </>
  );
};
