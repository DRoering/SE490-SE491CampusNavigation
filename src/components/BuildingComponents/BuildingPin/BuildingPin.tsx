import React, { useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import { Item, ItemOptions } from "../../../Reuseable";
import L from "leaflet";
import { IonButton, IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";
import "./BuildingPin.scss";
import { ShareButton } from "../../";
import { NavigationButton } from "../../NavigationButton";

interface BuildingPinProps {
  buildings: Item[];
  showName: boolean;
  openDetails: (i: ItemOptions) => void;
}

const filterBuildings = (buildings: Item[]) => {
  const validBuildings: Item[] = [];
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
          <Popup id="map-popup">
            <IonLabel id="name" class="ion-text-overflow">
              <strong>{building.name}</strong>
            </IonLabel>
            <p id="info">
              {building.isOpen && <img src="assets/mapIcons/open.png" alt="" />}
            </p>
            <IonButton
              expand="block"
              onClick={() => props.openDetails({ b: building })}
            >
              <IonLabel>Open Details</IonLabel>
            </IonButton>
            <IonGrid>
              <IonRow>
                <IonCol class="ion-no-padding" id="share-col" size="6">
                  <ShareButton
                    class="ion-no-margin"
                    id="share-button-pin"
                    iconId="ion-icon-pin"
                    expand={true}
                    fill={true}
                    shareItem={building}
                  />
                </IonCol>
                <IonCol class="ion-no-padding" id="share-col2" size="6">
                  <NavigationButton navigationItem={building} isPin={true} />
                </IonCol>
              </IonRow>
            </IonGrid>
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
