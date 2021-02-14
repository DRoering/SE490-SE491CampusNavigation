import React, { useMemo } from "react";
import { Marker, Popup, Tooltip } from "react-leaflet";
import { Building, CampusEvent, Lot } from "../../../DataProviders";
import L from "leaflet";
import { IonButton, IonLabel } from "@ionic/react";
import "./BuildingPin.scss";

interface BuildingPinProps {
  buildings: Building[];
  showName: boolean;
  openDetails: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
  openNav: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
}

const filterBuildings = (buildings: Building[]) => {
  const validBuildings: Building[] = [];
  buildings.forEach((building) => {
    if (building.coordinates) validBuildings.push(building);
  });
  console.log(validBuildings);
  return validBuildings;
};

export const BuildingPin: React.FC<BuildingPinProps> = (
  props: BuildingPinProps
) => {
  const validBuildings = useMemo(() => {
    console.log("BuildingPin memo called");
    return filterBuildings(props.buildings);
  }, [props.buildings]);
  const buildingIcon = L.icon({
    iconUrl: "assets/mapIcons/businessIcon.png",
    iconSize: [25, 25],
    popupAnchor: [0, -7],
  });

  return (
    <>
      {validBuildings.map((building) => (
        <Marker
          key={building.id}
          position={building.coordinates}
          icon={buildingIcon}
        >
          <Popup id="building-popup">
            <IonLabel id="name">{building.name}</IonLabel>
            <p id="info">
              {building.isOpen && <img src="assets/mapIcons/open.png" alt="" />}
            </p>
            <IonButton
              expand="block"
              onClick={() =>
                props.openDetails({ b: building, e: undefined, p: undefined })
              }
            >
              <IonLabel>Open Details</IonLabel>
            </IonButton>
            <IonButton
              color="tertiary"
              expand="block"
              onClick={() =>
                props.openNav({ b: building, e: undefined, p: undefined })
              }
            >
              <IonLabel>Navigate Here</IonLabel>
            </IonButton>
          </Popup>
          {/* <Tooltip
            className="tooltip"
            direction="bottom"
            offset={[0, 5]}
            opacity={1}
            permanent={props.showName}
          >
            <span>{building.name}</span>
          </Tooltip> */}
        </Marker>
      ))}
    </>
  );
};
