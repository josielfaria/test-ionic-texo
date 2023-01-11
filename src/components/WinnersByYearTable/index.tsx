import React, { useRef, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
import { MovieList } from '../../types/movie-list-data.type';
import { PaginatorParams } from '../../types/paginator-params.type';
import { debounce } from 'lodash';
import { search } from 'ionicons/icons';
import axios from 'axios';
import './styled.css'

const WinnersByYearTable: React.FC = () => {
  const apiUrl = 'https://tools.texoit.com/backend-java/api/movies';
  const [paginatorParams, setPaginatorParams] = useState<PaginatorParams>({ page: 0, size: 99, winner: 'true' });
  const [data, setData] = useState<MovieList>();

  const updateWinnersByYear = (year: string): void => {
    setPaginatorParams(prevState => {
      return { ...prevState, year };
    });
  }

  const searchWinnersByYear = (): void => {
    if (!!paginatorParams.year) {
      axios.get(apiUrl, { params: paginatorParams })
        .then((response) => {
          setData(response.data)
        })
    }
  }

  const setInputUpdateWinnersByYear = useRef(
    debounce((yearValue: string) => {
      updateWinnersByYear(yearValue);
    }, 500)
  ).current;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>List movie winners by year</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonRow>
          <IonCol size-xs="11">
            <input
              type="number"
              className="search-winners-year"
              placeholder="Search by year"
              onChange={(e) => setInputUpdateWinnersByYear(e.target.value)}
            />
          </IonCol>
          <IonCol size-xs="1">
            <button className="search-button" onClick={() => searchWinnersByYear()}            >
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </button>
          </IonCol>
        </IonRow>
        <IonGrid class="grid-table">

          <IonRow color="success">
            <IonCol class="ion-text-center" size-xs="4" size-md="4">Id</IonCol>
            <IonCol class="ion-text-center" size-xs="4" size-md="4">Year</IonCol>
            <IonCol class="ion-text-center" size-xs="4" size-md="4">Title</IonCol>
          </IonRow>

          {data && data.content.map((item: any, index: any) => {
            return (
              <IonRow key={index}>
                <IonCol size-xs="4" size-md="4">{item.id}</IonCol>
                <IonCol size-xs="4" size-md="4">{item.year}</IonCol>
                <IonCol size-xs="4" size-md="4">{item.title}</IonCol>
              </IonRow>
            )
          })}
        </IonGrid>
      </IonCardContent>
    </IonCard >
  );
}

export default WinnersByYearTable;
