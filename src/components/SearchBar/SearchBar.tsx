import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
} from "@ionic/react";

interface SearchBarProps {
  searchText?: string;
}

export const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <IonPage>
        <IonContent>
          <IonSearchbar
            value={props.searchText}
            onIonChange={(e) => setSearchText(e.detail.value!)}
            showCancelButton="always"
          ></IonSearchbar>
        </IonContent>
      </IonPage>
    </>
  );
};
