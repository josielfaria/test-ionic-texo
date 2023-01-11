import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
} from '@ionic/react';
import { useFetchPaginator } from '../../hooks/api';
import { MovieList } from '../../types/movie-list-data.type';
import { PaginatorParams } from '../../types/paginator-params.type';
import MovieListTable from '../../components/MovieListTable';
import Menu from '../../components/Menu';
import './styled.css';

const MovieListPage: React.FC = () => {
  const [paginatorParams, setPaginatorParams] = useState<PaginatorParams>({
    page: 0,
    size: 11,
  });

  const { data: movieList, isFetching } =
    useFetchPaginator<MovieList>(paginatorParams);

  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    isFetching ? present({ message: 'Loading...' }) : dismiss();
  }, [present, dismiss, isFetching]);

  const updateMovieList = (year: string, winner: string): void => {
    if (!!year) {
      setPaginatorParams((prevState) => {
        return { ...prevState, year, page: 0 };
      });
    }

    if (!!winner) {
      setPaginatorParams((prevState) => {
        return { ...prevState, winner, page: 0 };
      });
    }
  };

  const updatePageMovieList = (page: number): void => {
    setPaginatorParams((prevState) => {
      return { ...prevState, page };
    });
  };

  return (
    <IonPage data-testid='ion-page'>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size-xs='2' size-md='2'>
              <Menu />
            </IonCol>

            <IonCol size-xs='10' size-md='10'>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>List movies</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <MovieListTable
                    data={movieList}
                    updateMovieList={updateMovieList}
                    updatePageMovieList={updatePageMovieList}
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default MovieListPage;
