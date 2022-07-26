import React, { useState } from "react";
import { IonPage, IonContent, IonModal } from "@ionic/react";
import { Organization } from "../../DataProviders";
import {
  OrganizationList,
  OrganizationModal,
  HeaderBar,
} from "../../components";

interface OrganizationListProps {
  organizations: Organization[];
}

export const Organizations: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  const [org, setOrg] = useState<Organization>();
  const [showModal, setShowModal] = useState(false);

  const openModal = (o: Organization) => {
    setOrg(o);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <IonPage>
      <HeaderBar />
      <IonContent>
        <OrganizationList
          organizations={props.organizations}
          openModal={openModal}
        />
      </IonContent>
      {org && (
        <IonModal
          isOpen={showModal}
          cssClass="item-modal"
          swipeToClose={true}
          onDidDismiss={closeModal}
        >
          <OrganizationModal
            organization={org}
            close={() => setShowModal(false)}
          />
        </IonModal>
      )}
    </IonPage>
  );
};
