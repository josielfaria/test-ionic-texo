import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import { YearsMultipleWinners } from '../../types/years-multiple-winners';
import './styled.css'

interface YearsMultipleWinnersTableProps {
  data: YearsMultipleWinners | null,
}

const YearsMultipleWinnersTable: React.FC<YearsMultipleWinnersTableProps> = ({ data }) => {

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>List years with multiple winners</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid class="grid-table">
          <IonRow>
            <IonCol class="ion-text-center" size-xs="6" size-md="6">Year</IonCol>
            <IonCol class="ion-text-center" size-xs="6" size-md="6">Win Count</IonCol>

          </IonRow>

          {data && data.years.map((item: any, index: any) => {
            return (
              <IonRow key={index}>
                <IonCol size-xs="6" size-md="6">{item.year}</IonCol>
                <IonCol size-xs="6" size-md="6">{item.winnerCount}</IonCol>
              </IonRow>
            )
          })}
        </IonGrid>
      </IonCardContent>
    </IonCard >
  );
}

export default YearsMultipleWinnersTable;
