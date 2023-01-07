import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ProducersIntervalTable from '../../components/ProducersIntervalTable';
import TopStudiosTable from '../../components/TopStudiosTable';
import WinnersByYearTable from '../../components/WinnersByYearTable';
import YearsMultipleWinnersTable from '../../components/YearsMultipleWinnersTable';
import './styled.css';

const DashboardPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <YearsMultipleWinnersTable />
            </IonCol>
            <IonCol>
              <TopStudiosTable />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ProducersIntervalTable />
            </IonCol>
            <IonCol>
              <WinnersByYearTable />
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
