import React, { useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { IonButton, IonLabel } from "@ionic/react";
import "./EventPin.scss";
import { Item, ItemOptions } from "../../../Reuseable";

interface EventPinProps {
  events: Item[];
  openDetails: (i: ItemOptions) => void;
}

const filterEvents = (events: Item[]) => {
  const validEvents: Item[] = [];
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
              <IonButton
                expand="block"
                onClick={() =>
                  console.log(
                    "Navigate to : " + event.name + " " + event.coordinates
                  )
                }
              >
                <IonLabel>Navigate Here</IonLabel>
              </IonButton>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
