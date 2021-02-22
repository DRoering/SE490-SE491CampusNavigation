import React, { useState } from "react";
import { IonPage, IonContent, IonModal, IonSplitPane } from "@ionic/react";
import { Organization, useOrgSort, ItemSortOptions } from "../../DataProviders";
import {
  OrganizationList,
  OrganizationModal,
  HeaderBar,
  SortMenu,
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
  const [menuState, setMenuState] = useState(false);

  const openMenu = (s: boolean) => setMenuState(s);
  const openModal = (o: Organization) => {
    setOrg(o);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <IonPage>
      <HeaderBar openMenu={{ open: openMenu, currentState: menuState }} />
      <IonContent>
        <OrganizationList
          organizations={props.organizations}
          openModal={openModal}
          sortAlgorithm={useSort}
        />
        <IonSplitPane disabled={false} when={menuState}>
          <SortMenu
            sortOptions={sortOptions}
            currentSort={sort}
            updateSort={updateSort}
          />
        </IonSplitPane>
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
