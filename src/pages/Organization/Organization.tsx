import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import { Organization } from "../../DataProviders";
import { OrganizationList } from "../../components/OrganizationList";

interface OrganizationListProps {
  organization: Organization[];
}

export const organizations: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  return (
    <IonPage>
      <IonContent>
        <OrganizationList organization={props.organization} />
      </IonContent>
    </IonPage>
  );
};
