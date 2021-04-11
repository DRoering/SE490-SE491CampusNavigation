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
import { Item, ItemOptions } from "../../Reuseable";

export const ItemListSkeleton: React.FC = () => {
  interface ItemListProps {
    image: string;
    label: string;
  }

  const [data, setData] = useState();

  // setTimeout(() => {
  //   setData({
  //     image: 'Normal text',
  //     para1: 'Lorem ipsum dolor sit amet, consectetur',
  //     para2: 'adipiscing elit.'
  //   });
  // }, 5000);

  return (
    <IonContent>
      {data ? (
        <>
          <IonGrid>
            <IonRow>
              <IonCol size="4" sizeXs="6">
                <IonCard>
                  <img />
                  <IonCardContent>
                    <IonLabel id="card-title"></IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </>
      ) : (
        <>
          <IonGrid>
            <IonRow>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonThumbnail>
                    <IonSkeletonText animated />
                  </IonThumbnail>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated />
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
                  <IonCardContent>
                    <IonLabel id="card-title">
                      <IonSkeletonText animated />
                    </IonLabel>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol key={data} size="4" sizeXs="6">
                <IonCard>
                  <IonSkeletonText animated></IonSkeletonText>
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
      )}
    </IonContent>
  );
};
