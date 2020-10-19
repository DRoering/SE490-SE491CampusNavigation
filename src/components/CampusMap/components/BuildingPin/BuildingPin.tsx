import React from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { Building } from "../../../../DataProviders";
import L from "leaflet";
import { IonLabel } from "@ionic/react";
import "./BuildingPin.scss";

interface BuildingPinProps {
  buildings: Building[];
  showName: boolean;
}

export const BuildingPin: React.FC<BuildingPinProps> = (
  props: BuildingPinProps
) => {
  const buildingIcon = L.icon({
    iconUrl: "assets/mapIcons/businessIcon.png",
    iconSize: [25, 25],
    popupAnchor: [0, -7],
  });

  return (
    <>
      {props.buildings.map((building) => (
        <Marker
          key={building.id}
          position={building.coordinates}
          icon={buildingIcon}
        >
          <Popup id="building-popup">
            <IonLabel id="name">{building.name}</IonLabel>
            <p id="info">
              {`Hours: ${building.hours?.open.format(
                "hh:mm a"
              )} - ${building.hours?.close?.format("hh:mm a")}`}
            </p>
          </Popup>
          <Tooltip
            className="tooltip"
            direction="bottom"
            offset={[0, 5]}
            opacity={1}
            permanent={props.showName}
          >
            <span>{building.name}</span>
          </Tooltip>
        </Marker>
      ))}
    </>
  );
};
