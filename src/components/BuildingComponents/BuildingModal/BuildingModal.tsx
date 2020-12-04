import React, { useState } from "react";
import {
  IonCard,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
} from "@ionic/react";
import { Building, useServices } from "../../../DataProviders";
import { ModalHeader } from "../../";
import "./BuildingModal.scss";

interface BuildingModalProps {
  building: Building;
  close: () => void;
}

const getFindFormula = (id: number) => `Find("${id}",Buildings)`;

export const BuildingModal: React.FC<BuildingModalProps> = (
  props: BuildingModalProps
) => {
  const [results, setResults] = useState(5);
  const [services, isMaxResults] = useServices({
    maxRecords: results,
    filterByFormula: getFindFormula(props.building.id),
  });

  console.log(getFindFormula(props.building.id));

  const loadMoreServices = (event: CustomEvent<void>) => {
    console.log("loadMoreServices called");
    setResults(results + 5);
    (event.target as HTMLIonInfiniteScrollElement).complete();
  };

  return (
    <>
      <ModalHeader close={props.close} />
      <IonContent>
        <IonItem className="app-fonts" id="item-info">
          <IonLabel id="title">
            {`${props.building.name} ${props.building.abbreviation}`}
          </IonLabel>
        </IonItem>
        <IonCard id="img-card">
          <img
            ion-img-cache="true"
            src={props.building.imgUrl}
            alt={`${props.building.name}`}
          />
        </IonCard>
        <IonList>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Description</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.building.description}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Directions</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.building.directions}
            </IonLabel>
          </IonItem>
          <IonItemDivider className="app-fonts" id="item-info">
            <IonLabel id="title">Parking</IonLabel>
          </IonItemDivider>
          <IonItem className="app-fonts" id="item-info">
            <IonLabel className="ion-text-wrap">
              {props.building.parking}
            </IonLabel>
          </IonItem>
        </IonList>
        <IonList inset={true}>
          <IonItemDivider id="divider">
            <IonLabel id="title">Services</IonLabel>
          </IonItemDivider>
          {services.length > 0 ? (
            services.map((service) => (
              <IonItem
                key={service.serviceId}
                className="app-fonts"
                id="service"
              >
                <a
                  href={service.serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonLabel className="ion-text-wrap" id="service-name">
                    {service.name}
                  </IonLabel>
                </a>
              </IonItem>
            ))
          ) : (
            <IonItem id="service">
              <IonLabel className="app-fonts" id="service-item">
                Building Services are not available
              </IonLabel>
            </IonItem>
          )}
          <IonInfiniteScroll
            threshold="25px"
            onIonInfinite={(e) => loadMoreServices(e)}
            disabled={isMaxResults}
          >
            <IonInfiniteScrollContent />
          </IonInfiniteScroll>
        </IonList>
      </IonContent>
    </>
  );
};
