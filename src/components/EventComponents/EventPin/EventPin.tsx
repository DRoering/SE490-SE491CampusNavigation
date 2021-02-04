import React, { useMemo } from "react";
import { Building, CampusEvent, Lot } from "../../../DataProviders";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonButton, IonLabel } from "@ionic/react";
import "./EventPin.scss";

interface EventPinProps {
  events: CampusEvent[];
  openDetails: (i: { b?: Building; e?: CampusEvent; p?: Lot }) => void;
}

const filterEvents = (events: CampusEvent[]) => {
  const validEvents: CampusEvent[] = [];
  events.forEach((event) => {
    if (event.coordinates) validEvents.push(event);
  });
  console.log(validEvents);
  return validEvents;
};

export const EventPin: React.FC<EventPinProps> = (props: EventPinProps) => {
  const validEvents = useMemo(() => {
    console.log("Event Pin Memo Called");
    return filterEvents(props.events);
  }, [props.events]);
  const eventIcon = L.icon({
    iconUrl: "assets/mapIcons/calendar.png",
    iconSize: [25, 25],
  });

  return (
    <>
      {validEvents &&
        validEvents.map((event) => (
          <Marker key={event.id} position={event.coordinates} icon={eventIcon}>
            <Popup id="event-popup">
              <IonLabel>{event.name}</IonLabel>
              <IonButton
                expand="block"
                onClick={() =>
                  props.openDetails({ b: undefined, e: event, p: undefined })
                }
              >
                <IonLabel>Open Details</IonLabel>
              </IonButton>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
