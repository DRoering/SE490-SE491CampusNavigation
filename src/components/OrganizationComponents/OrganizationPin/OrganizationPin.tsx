import React, { useMemo } from "react";
import { Organization } from "../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonLabel } from "@ionic/react";
import "./OrganizationPin.scss";

interface OrganizationPinProps {
  organization: Organization[];
}
const filterOrganization = (organization: Organization[]) => {
  const validOrganization: Organization[] = [];
  organization.forEach((organization) => {
    if (organization.coordinates) validOrganization.push(organization);
  });
  return validOrganization;
};

export const OrganizationPin: React.FC<OrganizationPinProps> = (
  props: OrganizationPinProps
) => {
  const validOrganization = useMemo(() => {
    return filterOrganization(props.organization);
  }, [props.organization]);
  const organizationIcon = L.icon({
    iconUrl: "assets/mapIcons/organization.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {validOrganization &&
        validOrganization.map((organizations) => (
          <Marker
            key={organizations.id}
            position={organizations.coordinates}
            icon={organizationIcon}
          >
            <Popup id="Organization-popup">
              <IonLabel>{organizations.name}</IonLabel>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
