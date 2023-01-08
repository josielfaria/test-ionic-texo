import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';
import { TopStudios } from '../../types/top-studios.type';
import './styled.css'

interface TopStudiosTableProps {
  data: TopStudios | null,
}

const TopStudiosTable: React.FC<TopStudiosTableProps> = ({ data }) => {

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Top 3 studios with winners</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow color="success">
            <IonCol class="ion-text-center" size-xs="6" size-md="6">Name</IonCol>
            <IonCol class="ion-text-center" size-xs="6" size-md="6">Win Count</IonCol>
          </IonRow>

          {data && data.studios.slice(0, 3).map((item: any, index: any) => {
            return (
              <IonRow key={index}>
                <IonCol size-xs="6" size-md="6">{item.name}</IonCol>
                <IonCol size-xs="6" size-md="6">{item.winCount}</IonCol>
              </IonRow>
            )
          })}
        </IonGrid>
      </IonCardContent>
    </IonCard >
  );
}

export default TopStudiosTable;
