import React, { useState } from "react";
import { IonPage, IonContent, IonModal } from "@ionic/react";
import { Organization, useOrgSort, ItemSortOptions } from "../../DataProviders";
import {
  OrganizationList,
  OrganizationModal,
  HeaderBar,
} from "../../components";

interface OrganizationListProps {
  organizations: Organization[];
}

const sortOptions = ItemSortOptions.orgOptions;

export const Organizations: React.FC<OrganizationListProps> = (
  props: OrganizationListProps
) => {
  const [org, setOrg] = useState<Organization>();
  const [showModal, setShowModal] = useState(false);
  const [sort, updateSort, useSort] = useOrgSort();

  const openModal = (o: Organization) => {
    setOrg(o);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <IonPage>
      <HeaderBar
        sortObject={{
          sortOptions: sortOptions,
          currentSort: sort,
          updateSort: updateSort,
        }}
      />
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
