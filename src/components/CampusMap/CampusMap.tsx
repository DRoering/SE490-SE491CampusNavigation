import React, { useEffect, useState, useRef } from "react";
import { ImageOverlay, Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { UserLocation } from "./Components";
import { IonAlert, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { Item, ItemOptions } from "../../Reuseable";
import { chevronDown, chevronUp } from "ionicons/icons";

const maxFloor = 3;
const minFloor = 0;

const imageBounds = new L.LatLngBounds(
  [45.5514496, -94.151318],
  [45.551056, -94.150568]
);
//45.551556, -94.151670
interface CampusMapProps {
  buildings: Item[] | false;
  events: Item[] | false;
  parkingLots: Item[] | false;
  organizations: Item[] | false;
  showName: boolean;
  position: { c: L.LatLng; z: number };
  userPosition: { c: L.LatLng; r: number };
  openDetails: (i: ItemOptions) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [imgBounds, setImgBounds] = useState(imageBounds);
  const [showFloor, setShowFloor] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [navigationItem, setNavItem] = useState<Item>();
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const initiateNav = (i: Item) => {
    console.log(i);
    setNavItem(i);
    setShowNavModal(true);
  };

  const updateBounds = (z: number) => {
    if (z == 18) setImgBounds(imgBounds.pad(1));
    else setImgBounds(imageBounds);
  };

  const mapRef = useRef<Map>(null);

  const map = (
    <Map
      key={minimumZoom}
      center={props.position.c}
      zoom={props.position.z}
      //minZoom={minimumZoom}
      id="campus-map"
      ref={mapRef}
      onzoomend={() =>
        updateBounds(mapRef.current?.leafletElement.getZoom() || -1)
      }
      zoomSnap={0.5}
      zoomDelta={0.5}
      onViewportChange={() => {
        setShowFloor(
          imgBounds.contains(
            mapRef.current?.leafletElement.getCenter() || [0, 0]
          )
        );
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="http://osm.org/copyright">&copy; OpenStreetMap</a> | <a href="https://www.targomo.com/developers/resources/attribution/" target="_blank">&copy; Targomo</a>'
      />
      {showFloor && (
        <ImageOverlay
          url={`assets/floorView/ISELF_${currentFloor}_D.png`}
          bounds={imgBounds}
        />
      )}
      {props.buildings && (
        <BuildingPin
          buildings={props.buildings}
          showName={props.showName}
          openDetails={props.openDetails}
          openNav={initiateNav}
        />
      )}
      {props.events && (
        <EventPin events={props.events} openDetails={props.openDetails} />
      )}
      {props.parkingLots && <ParkingLotPin parkingLots={props.parkingLots} />}
      {props.organizations && (
        <OrganizationPin organization={props.organizations} />
      )}
      {props.userPosition && <UserLocation userPosition={props.userPosition} />}
    </Map>
  );

  return (
    <>
      {map}
      {showFloor && (
        <IonFab vertical="bottom" horizontal="start">
          <IonFabButton
            color="secondary"
            disabled={currentFloor === maxFloor}
            onClick={() => setCurrentFloor(currentFloor + 1)}
          >
            <IonIcon icon={chevronUp} />
          </IonFabButton>
          <IonFabButton
            color="tertiary"
            disabled={currentFloor === minFloor}
            onClick={() => setCurrentFloor(currentFloor - 1)}
          >
            <IonIcon icon={chevronDown} />
          </IonFabButton>
        </IonFab>
      )}
      <IonAlert
        isOpen={showNavModal}
        onDidDismiss={() => setShowNavModal(false)}
        subHeader={`Navigate to ${navigationItem?.name}`}
        message={"Do you want to start navigation in native maps application?"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "Okay",
            handler: () => {
              console.log("Confirm Okay");
            },
          },
        ]}
      />
    </>
  );
};
