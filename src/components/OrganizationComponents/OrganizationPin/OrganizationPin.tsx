import React from "react";
import { Organization } from "../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonLabel } from "@ionic/react";
import "./OrganizationPin.scss";

interface OrganizationPinProps {
  organization: Organization[];
}

export const OrganizationPin: React.FC<OrganizationPinProps> = (
  props: OrganizationPinProps
) => {
  const OrganizationIcon = L.icon({
    iconUrl: "assets/mapIcons/organization.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {props.organization.map((organizations) => (
        <Marker
          key={organizations.id}
          position={organizations.coordinates}
          icon={OrganizationIcon}
        >
          <Popup id="Organization-popup">
            <IonLabel>{organizations.name}</IonLabel>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
