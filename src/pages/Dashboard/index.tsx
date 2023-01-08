import React from 'react';
import ProducersIntervalTable from '../../components/ProducersIntervalTable';
import TopStudiosTable from '../../components/TopStudiosTable';
import WinnersByYearTable from '../../components/WinnersByYearTable';
import YearsMultipleWinnersTable from '../../components/YearsMultipleWinnersTable';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useFetch } from '../../hooks/api';
import { YearsMultipleWinners } from '../../types/years-multiple-winners';
import { TopStudios } from '../../types/top-studios.type';
import { ProducersInterval } from '../../types/producers-interval.type';
import './styled.css';

const DashboardPage: React.FC = () => {
  const { data: yearsMultipleWinners } = useFetch<YearsMultipleWinners>('?projection=years-with-multiple-winners');
  const { data: topStudios } = useFetch<TopStudios>('?projection=studios-with-win-count');
  const { data: producersInterval } = useFetch<ProducersInterval>('?projection=max-min-win-interval-for-producers');

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
              <YearsMultipleWinnersTable data={yearsMultipleWinners} />
            </IonCol>
            <IonCol>
              <TopStudiosTable data={topStudios} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ProducersIntervalTable data={producersInterval} />
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
