import React, { useRef, useState } from 'react';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  useIonLoading,
} from '@ionic/react';
import { MovieList } from '../../types/movie-list-data.type';
import { PaginatorParams } from '../../types/paginator-params.type';
import { debounce } from 'lodash';
import { search } from 'ionicons/icons';
import axios from 'axios';
import './styled.css';

const WinnersByYearTable: React.FC = () => {
  const apiUrl = 'https://tools.texoit.com/backend-java/api/movies';
  const PAGINATOR_INIT: PaginatorParams = { page: 0, size: 99, winner: "true", year: "0" };

  const [paginatorParams, setPaginatorParams] = useState<PaginatorParams>(PAGINATOR_INIT);

  const [data, setData] = useState<MovieList>();

  const [present, dismiss] = useIonLoading();

  const updateWinnersByYear = (year: string): void => {
    setPaginatorParams((prevState) => {
      return { ...prevState, year };
    });
  };

  const searchWinnersByYear = (): void => {
    if (!paginatorParams.year) {
      setPaginatorParams(PAGINATOR_INIT);

    }

    present();
    axios
      .get(apiUrl, { params: paginatorParams })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log("error:", err);
      })
      .finally(() => {
        dismiss();
      });
  };

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
          <IonCol size-xs='11'>
            <input
              type='number'
              className='search-winners-year'
              placeholder='Search by year'
              onChange={(e) => setInputUpdateWinnersByYear(e.target.value)}
            />
          </IonCol>

          <IonCol size-xs='1'>
            <button className='search-button' onClick={searchWinnersByYear}>
              <IonIcon slot='icon-only' icon={search}></IonIcon>
            </button>
          </IonCol>
        </IonRow>

        <IonGrid class='grid-table' data-testid='table-winners-by-year'>
          <IonRow color='success'>
            <IonCol class='ion-text-center'>Id</IonCol>
            <IonCol class='ion-text-center'>Year</IonCol>
            <IonCol class='ion-text-center'>Title</IonCol>
          </IonRow>

          {data &&
            data.content.map((item: any, index: any) => {
              return (
                <IonRow key={index}>
                  <IonCol>{item.id}</IonCol>
                  <IonCol>{item.year}</IonCol>
                  <IonCol>{item.title}</IonCol>
                </IonRow>
              );
            })}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default WinnersByYearTable;
