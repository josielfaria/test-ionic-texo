import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow, IonTitle } from '@ionic/react';
import { ProducersInterval } from '../../types/producers-interval.type';
import './styled.css'

interface ProducersIntervalProps {
  data: ProducersInterval | null,
}

const ProducersIntervalTable: React.FC<ProducersIntervalProps> = ({ data }) => {

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Producers with longest and shortest interval between wins</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonTitle class='ion-text-uppercase'>maximum</IonTitle>
        <IonGrid>
          <IonRow color="success">
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Producer</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Interval</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Previous Year</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Following Year</IonCol>
          </IonRow>

          {data && data.max.map((item: any, index: any) => {
            return (
              <IonRow key={index}>
                <IonCol size-xs="3" size-md="3">{item.producer}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.interval}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.previousWin}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.followingWin}</IonCol>
              </IonRow>
            )
          })}
        </IonGrid>

        <IonTitle class='ion-text-uppercase ion-padding-top'>minimum</IonTitle>
        <IonGrid>
          <IonRow color="success">
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Producer</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Interval</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Previous Year</IonCol>
            <IonCol class="ion-text-center" size-xs="3" size-md="3">Following Year</IonCol>
          </IonRow>
          {data && data.min.map((item: any, index: any) => {
            return (
              <IonRow key={index}>
                <IonCol size-xs="3" size-md="3">{item.producer}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.interval}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.previousWin}</IonCol>
                <IonCol size-xs="3" size-md="3">{item.followingWin}</IonCol>
              </IonRow>
            )
          })}
        </IonGrid>
      </IonCardContent>
    </IonCard >
  );
}

export default ProducersIntervalTable;
