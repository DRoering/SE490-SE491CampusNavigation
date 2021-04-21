import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonSkeletonText,
} from "@ionic/react";
import { useServices } from "../../../DataProviders";
import { ModalHeader } from "../../";
import "./BuildingModal.scss";
import { Item } from "../../../Reuseable";

interface BuildingModalProps {
  building: Item;
  close: () => void;
  setPosition?: (c: L.LatLng) => void;
}

const getFindFormula = (id: number) => `Find("${id}",Buildings)`;

export const BuildingModal: React.FC<BuildingModalProps> = (
  props: BuildingModalProps
) => {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    if (services.length === results) setIsLoading(false);
    else if (!isMaxResults) setIsLoading(true);
  }, [services, results]);

  const ServiceSkeletons = () => {
    const numberOfSkellys = [0, 1, 2, 3, 4];

    return (
      <>
        {numberOfSkellys.map((numb) => (
          <IonItem key={numb} className="app-fonts" id="service">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="service-text"
            >
              <IonLabel className="ion-text-wrap" id="service-name">
                <IonSkeletonText animated />
              </IonLabel>
            </a>
          </IonItem>
        ))}
      </>
    );
  };

  return (
    <IonContent>
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
        {props.setPosition && (
          <IonButton
            disabled={!props.building.coordinates}
            expand="block"
            color="secondary"
            onClick={() => props.setPosition?.(props.building.coordinates)}
          >
            View on Map
          </IonButton>
        )}
        <IonButton
          expand="block"
          onClick={() =>
            console.log(
              "Navigate to : " +
                props.building.name +
                " " +
                props.building.coordinates
            )
          }
        >
          <IonLabel>Navigate Here</IonLabel>
        </IonButton>
        {props.building.hasFloors && (
          <IonButton
            color="tertiary"
            expand="block"
            //routerLink="/FloorView"
            onClick={() => props.setPosition?.(props.building.coordinates)}
          >
            <IonLabel>Interior View</IonLabel>
          </IonButton>
        )}
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
        <IonList class="building-services" inset={true}>
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
          {isLoading && <ServiceSkeletons />}
          <IonInfiniteScroll
            threshold="25px"
            onIonInfinite={(e) => loadMoreServices(e)}
            disabled={isMaxResults}
          >
            <IonInfiniteScrollContent />
          </IonInfiniteScroll>
        </IonList>
      </IonContent>
    </IonContent>
  );
};
