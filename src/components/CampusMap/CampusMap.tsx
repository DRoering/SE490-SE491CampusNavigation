import React, { useEffect, useState, useRef, useMemo } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { FloorOverlay, UserLocation } from "./Components";
import {
  IonAlert,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLoading,
} from "@ionic/react";
import { Item, ItemOptions } from "../../Reuseable";
import { navigateCircleOutline } from "ionicons/icons";
import { BuildingFloor, useUserPosition } from "../../DataProviders";

//45.551556, -94.151670
interface CampusMapProps {
  buildings: Item[] | false;
  events: Item[] | false;
  parkingLots: Item[] | false;
  organizations: Item[] | false;
  showName: boolean;
  position: { c: L.LatLng; z: number };
  openDetails: (i: ItemOptions) => void;
  floors: BuildingFloor[];
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [location, manualRefresh] = useUserPosition();
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [locateError, setLocateError] = useState(false);
  const [currentOverlay, setCurrentOverlay] = useState<BuildingFloor>(
    props.floors[0]
  );
  const [currentZoom, setCurrentZoom] = useState(props.position.z);
  const [currentCenter, setCurrentCenter] = useState<L.LatLng>(
    L.latLng([0, 0])
  );
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);

  const mapRef = useRef<Map>(null);

  const centerUser = () => {
    const temp = location && mapRef.current?.leafletElement.panTo(location);
  };
  const closePopup = () => {
    const temp = mapRef.current?.leafletElement.closePopup();
  };

  const getFloor = (c: L.LatLng) =>
    (mapRef.current?.leafletElement.getZoom() || 0) > 17 &&
    props.floors.forEach((floor) => {
      if (floor.bounds.contains(c)) {
        setCurrentOverlay(floor);
        setIsDisplaying(true);
        closePopup();
      }
    });

  const checkFloor = (c: L.LatLng, z: number) => {
    setCurrentCenter(c);
    setCurrentZoom(z);
    const boundsCheck =
      z === 18 ? currentOverlay.bounds.pad(1) : currentOverlay.bounds;
    if (boundsCheck.contains(c) && z > 16) {
      closePopup();
    } else setIsDisplaying(false);
  };

  const map = (
    <Map
      key={minimumZoom}
      center={props.position.c}
      zoom={props.position.z}
      id="campus-map"
      ref={mapRef}
      zoomSnap={0.5}
      zoomDelta={0.5}
      onViewportChange={() =>
        !isDisplaying
          ? getFloor(
              mapRef.current?.leafletElement.getCenter() || L.latLng([0, 0])
            )
          : checkFloor(
              mapRef.current?.leafletElement.getCenter() || L.latLng([0, 0]),
              mapRef.current?.leafletElement.getZoom() || 0
            )
      }
      onzoomlevelschange={() =>
        isDisplaying &&
        (mapRef.current?.leafletElement.getZoom() || 0) >= 16 &&
        checkFloor(
          mapRef.current?.leafletElement.getCenter() || L.latLng([0, 0]),
          mapRef.current?.leafletElement.getZoom() || 0
        )
      }
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
      />
      {isDisplaying && (
        <FloorOverlay
          buildingFloor={currentOverlay}
          currentZoom={currentZoom}
          center={currentCenter}
          closePopup={closePopup}
        />
      )}
      {props.buildings && (
        <BuildingPin
          buildings={props.buildings}
          showName={props.showName}
          openDetails={props.openDetails}
        />
      )}
      {props.events && (
        <EventPin events={props.events} openDetails={props.openDetails} />
      )}
      {props.parkingLots && <ParkingLotPin parkingLots={props.parkingLots} />}
      {props.organizations && (
        <OrganizationPin organization={props.organizations} />
      )}
      {location && <UserLocation userPosition={location} />}
    </Map>
  );

  return (
    <>
      {map}
      <IonFab horizontal="end" vertical="bottom" slot="fixed">
        <IonFabButton
          id="center-user"
          color="dark"
          onClick={centerUser}
          onTouchStart={() =>
            !currentTimeout &&
            setCurrentTimeout(
              manualRefresh(centerUser, setShowLoading, setLocateError)
            )
          }
          onTouchEnd={() => {
            console.log("Timeout Cleared");
            currentTimeout && clearTimeout(currentTimeout);
            setCurrentTimeout(undefined);
          }}
        >
          <IonLoading
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={"Refreshing location..."}
            duration={10000}
          />
          <IonIcon icon={navigateCircleOutline} />
        </IonFabButton>
      </IonFab>
      {locateError && (
        <IonAlert
          isOpen={locateError}
          onDidDismiss={() => setLocateError(false)}
          subHeader={"we encountered a problem"}
          message={"We were unable to find your location"}
          buttons={[
            {
              text: "Okay",
              role: "cancel",
            },
          ]}
        />
      )}
    </>
  );
};
