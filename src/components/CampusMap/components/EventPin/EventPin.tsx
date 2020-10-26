import React from "react";
import { CampusEvent } from "../../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonLabel } from "@ionic/react";
import "./EventPin.scss";

interface EventPinProps {
  events: CampusEvent[];
}

export const EventPin: React.FC<EventPinProps> = (props: EventPinProps) => {
  const eventIcon = L.icon({
    iconUrl: "assets/mapIcons/calendar.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {props.events.map((event) => (
        <Marker key={event.id} position={event.coordinates} icon={eventIcon}>
          <Popup id="event-popup">
            <IonLabel>{event.name}</IonLabel>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
