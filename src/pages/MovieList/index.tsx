import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import MovieListTable from '../../components/MovieListTable';
import { useFetchPaginator } from '../../hooks/api';
import { MovieList } from '../../types/movie-list-data.type';
import { PaginatorParams } from '../../types/paginator-params.type';
import './styled.css';

const MovieListPage: React.FC = () => {
  const [paginatorParams, setPaginatorParams] = useState<PaginatorParams>({ page: 0, size: 12 });
  const { data: movieList, isFetching } = useFetchPaginator<MovieList>(paginatorParams);

  const updateMovieList = (year: string, winner: string): void => {
    if (!!year) {
      setPaginatorParams(prevState => {
        return { ...prevState, year };
      });
    }

    if (!!winner) {
      setPaginatorParams(prevState => {
        return { ...prevState, winner };
      });
    };
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>List movies</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {isFetching
              ? <Loading show={isFetching}></Loading>
              : <MovieListTable data={movieList} updateMovieList={updateMovieList} />
            }
          </IonCardContent>
        </IonCard >
      </IonContent>
    </IonPage>
  );
};

export default MovieListPage;
