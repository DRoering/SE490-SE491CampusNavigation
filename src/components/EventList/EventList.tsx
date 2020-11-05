import {
  IonList,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
} from "@ionic/react";
import React from "react";
import { CampusEvent } from "../../DataProviders";

interface EventListProps {
  events: CampusEvent[];
  clickEvent: () => void;
}

export const EventList: React.FC<EventListProps> = (props: EventListProps) => {
  return (
    <IonList>
      {props.events.map((event) => (
        <IonCard
          key={event.id}
          onClick={() => props.clickEvent()}
          className="item-text-wrap"
        >
          <IonCardContent>
            <IonImg src="assets/mapIcons/calendar.png" />
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <IonLabel>
                    {`${event.name} - `}{" "}
                    {`Hours:
                    ${event?.hours?.open?.format(
                      "hh:mm"
                    )} - ${event?.hours?.close?.format("hh:mm")}`}
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p id="info"></p>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      ))}
    </IonList>
  );
};
