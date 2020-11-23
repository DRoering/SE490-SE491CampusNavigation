import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Organization } from "../../DataProviders";
import { HeaderBar, OrganizationList } from "../../components";

interface OrganizationListProps {
  organization: Organization[];
}

export const Organizations: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <OrganizationList organization={props.organization} />
      </IonContent>
    </IonPage>
  );
};
