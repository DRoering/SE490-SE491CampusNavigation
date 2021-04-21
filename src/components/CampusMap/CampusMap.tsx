import React, { useEffect, useState, useRef, useMemo } from "react";
import { ImageOverlay, Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { FloorOverlay, UserLocation } from "./Components";
import { IonAlert, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { Item, ItemOptions } from "../../Reuseable";
import { navigateCircleOutline } from "ionicons/icons";
import {
  BuildingFloor,
  NavigatorProvider,
  useUserPosition,
} from "../../DataProviders";

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
  const [showNavModal, setShowNavModal] = useState(false);
  const [navigationItem, setNavItem] = useState<Item>();
  const [location, manualRefresh] = useUserPosition();
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();
  const [isDisplaying, setIsDisplaying] = useState(false);
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

  const initiateNav = (i: Item) => {
    console.log(i);
    setNavItem(i);
    setShowNavModal(true);
  };

  const mapRef = useRef<Map>(null);

  const centerUser = () => {
    const temp = location && mapRef.current?.leafletElement.panTo(location);
  };

  const closePopup = () => {
    const temp = mapRef.current?.leafletElement.closePopup();
  };

  const getFloor = () => {
    props.floors.forEach((floor) => {
      if (floor.bounds.contains(currentCenter)) {
        setCurrentOverlay(floor);
        setIsDisplaying(true);
        closePopup();
      }
    });
  };

  const checkFloor = () => {
    const boundsCheck =
      currentZoom === 18 ? currentOverlay.bounds.pad(1) : currentOverlay.bounds;
    if (boundsCheck.contains(currentCenter) && currentZoom > 16) {
      closePopup();
    } else setIsDisplaying(false);
  };

  useMemo(() => {
    isDisplaying ? checkFloor() : getFloor();
  }, [currentZoom, currentCenter]);

  const map = (
    <Map
      key={minimumZoom}
      center={props.position.c}
      zoom={props.position.z}
      //minZoom={minimumZoom}
      id="campus-map"
      ref={mapRef}
      onzoomend={() =>
        setCurrentZoom(mapRef.current?.leafletElement.getZoom() || -1)
      }
      zoomSnap={0.5}
      zoomDelta={0.5}
      onViewportChange={() =>
        setCurrentCenter(
          L.latLng([
            mapRef.current?.leafletElement.getCenter().lat || 0,
            mapRef.current?.leafletElement.getCenter().lng || 0,
          ])
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
      {location && <UserLocation userPosition={location} />}
    </Map>
  );

  return (
    <>
      {map}
      <IonFab horizontal="end" vertical="bottom" slot="fixed">
        <IonFabButton
          color="dark"
          onClick={centerUser}
          onTouchStart={() =>
            !currentTimeout && setCurrentTimeout(manualRefresh(centerUser))
          }
          onTouchEnd={() => {
            console.log("Timeout Cleared");
            currentTimeout && clearTimeout(currentTimeout);
            setCurrentTimeout(undefined);
          }}
        >
          <IonIcon icon={navigateCircleOutline} />
        </IonFabButton>
      </IonFab>
      {navigationItem?.coordinates ? (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`Navigate to ${navigationItem?.name}`}
          message={
            "Do you want to start navigation in your native maps application?"
          }
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
            },
            {
              text: "Okay",
              handler: () => {
                NavigatorProvider(navigationItem);
              },
            },
          ]}
        />
      ) : (
        <IonAlert
          isOpen={showNavModal}
          onDidDismiss={() => setShowNavModal(false)}
          subHeader={`We've ran into an issue`}
          message={
            "We lack information necessary to route you to this location. Please check that your location is on"
          }
          buttons={[
            {
              text: "Ok",
              role: "cancel",
            },
          ]}
        />
      )}
    </>
  );
};
