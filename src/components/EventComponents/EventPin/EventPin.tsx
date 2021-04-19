import React, { useMemo } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import {
  IonButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/react";
import "./EventPin.scss";
import { Item, ItemOptions } from "../../../Reuseable";
import { NavigationButton, ShareButton } from "../..";

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
              <IonLabel id="name" class="ion-text-overflow">
                <strong>{event.name}</strong>
              </IonLabel>
              <IonButton
                expand="block"
                onClick={() =>
                  props.openDetails({ b: undefined, e: event, p: undefined })
                }
              >
                <IonLabel>Open Details</IonLabel>
              </IonButton>
              <IonGrid>
                <IonRow>
                  <IonCol class="ion-no-padding" id="share-col" size="6">
                    <ShareButton
                      class="ion-no-margin"
                      id="share-button-pin"
                      iconId="ion-icon-pin"
                      expand={true}
                      fill={true}
                      shareItem={event}
                    />
                  </IonCol>
                  <IonCol class="ion-no-padding" id="share-col2" size="6">
                    <IonButton
                      class="ion-no-margin"
                      id="navigate-button-pin"
                      color="dark"
                      expand="block"
                      onClick={() =>
                        console.log(
                          "Navigate to : " +
                            event.name +
                            " " +
                            event.coordinates
                        )
                      }
                    >
                      <NavigationButton navigationItem={event} isPin={true} />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </Popup>
          </Marker>
        ))}
    </>
  );
};
