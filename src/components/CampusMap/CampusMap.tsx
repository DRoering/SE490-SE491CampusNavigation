import React, { useEffect, useState, useRef } from "react";
import { ImageOverlay, Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./CampusMap.scss";
import { BuildingPin, ParkingLotPin, EventPin } from "../";
import { OrganizationPin } from "../OrganizationComponents/OrganizationPin";
import { UserLocation } from "./Components";
import {
  IonAlert,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLoading,
} from "@ionic/react";
import { Item, ItemOptions } from "../../Reuseable";
import { chevronDown, chevronUp, navigateCircleOutline } from "ionicons/icons";
import {
  NavigatorProvider,
  useFloorOverlay,
  useUserPosition,
} from "../../DataProviders";

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
  openDetails: (i: ItemOptions) => void;
}

export const CampusMap: React.FC<CampusMapProps> = (props: CampusMapProps) => {
  const [showNavModal, setShowNavModal] = useState(false);
  const [imgBounds, setImgBounds] = useState(imageBounds);
  const [showFloor, setShowFloor] = useState(false);
  const [currentFloor, setCurrentFloor] = useState(1);
  const [navigationItem, setNavItem] = useState<Item>();
  const [location, manualRefresh] = useUserPosition();
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();
  const [showLoading, setShowLoading] = useState(false);
  const [locateError, setLocateError] = useState(false);
  const minimumZoom = 8;
  useEffect(() => {
    console.debug("resetSize Called");
    setTimeout(() => {
      window.dispatchEvent(new Event("resize", { bubbles: true }));
    }, 750);
  }, []);
  useFloorOverlay();

  const initiateNav = (i: Item) => {
    console.log(i);
    setNavItem(i);
    setShowNavModal(true);
  };

  const updateBounds = (z: number) => {
    if (z === 18) {
      if (imgBounds === imageBounds) setImgBounds(imgBounds.pad(1));
    } else setImgBounds(imageBounds);
  };

  const mapRef = useRef<Map>(null);

  const shouldShowFloor = () => {
    const tempElement = mapRef.current?.leafletElement;
    if (
      tempElement &&
      imgBounds.contains(
        tempElement.getCenter() || ([0, 0] && tempElement?.getZoom() > 16)
      )
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const temp = mapRef.current?.leafletElement.closePopup();
      setShowFloor(true);
    } else setShowFloor(false);
  };

  const centerUser = () => {
    const temp = location && mapRef.current?.leafletElement.panTo(location);
  };

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
      onViewportChange={shouldShowFloor}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="http://osm.org/copyright">&copy; OpenStreetMap</a>'
      />
      {showFloor && (
        <ImageOverlay
          url={`assets/floorView/ISELF_${
            currentFloor === 1 ? "1_D" : currentFloor
          }.png`}
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
      {locateError && (
        <IonAlert
          isOpen={locateError}
          onDidDismiss={() => setLocateError(false)}
          subHeader={"We encountered a problem"}
          message={"We were unable to find your locaiton."}
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
