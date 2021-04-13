import React, { useState } from "react";
import { FilterType, SortType } from "../../DataProviders";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonRow,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";
import "./ItemListSkeleton.scss";

export const ItemListSkeleton: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol size="4" sizeXs="6">
            <IonCard>
              <IonThumbnail class="fixed-thumbnail">
                <IonSkeletonText animated />
              </IonThumbnail>
              <IonCardContent>
                <IonLabel id="card-title">
                  <IonSkeletonText animated />
                </IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};
