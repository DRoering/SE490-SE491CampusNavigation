import React, { useEffect, useState, useRef } from "react";
import { ImageOverlay, Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { Building, Lot, CampusEvent, Organization } from "../../DataProviders";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { UserLocation } from "./Components";
import {
  IonModal,
  IonItem,
  IonText,
  IonItemDivider,
  IonButton,
  IonLabel,
  IonAlert,
} from "@ionic/react";

const latZoom = 0.000027275;
const lonZoom = 0.00009;

const imageBounds = new L.LatLngBounds(
  [45.5514496, -94.151318],
  [45.551056, -94.150568]
);
//45.551556, -94.151670
interface CampusMapProps {
  buildings: Building[] | false;
  events: CampusEvent[] | false;
  parkingLots: Lot[] | false;
  organizations: Organization[] | false;
  showName: boolean;
  position: { c: L.LatLng; z: number };
  userPosition: { c: L.LatLng; r: number };
  openDetails: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [imgBounds, setImgBounds] = useState(imageBounds);
  const [showFloor, setShowFloor] = useState(false);
  const [navigationItem, setNavItem] = useState<
    Building | CampusEvent | Lot | Organization
  >();
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const initiateNav = (i: Building | CampusEvent | Lot | Organization) => {
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
        <ImageOverlay url="assets/floorView/ISELF_1_D.png" bounds={imgBounds} />
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
      {props.parkingLots && (
        <ParkingLotPin
          parkingLots={props.parkingLots}
          openDetails={props.openDetails}
        />
      )}
      {props.organizations && (
        <OrganizationPin organization={props.organizations} />
      )}
      {props.userPosition && <UserLocation userPosition={props.userPosition} />}
    </Map>
  );

  return (
    <>
      {map}
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
