import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Loading from '../../components/Loading';
import MovieListTable from '../../components/MovieListTable';
import { useFetch } from '../../hooks/api';
import './styled.css';

type MovieListTableResponse = {
  qq: string; // TODO: response da api
}

const MovieListPage: React.FC = () => {
  const { data: movieList, isFetching } = useFetch<MovieListTableResponse>('?page=0&size=99');

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
              : <MovieListTable data={movieList} />
            }
          </IonCardContent>
        </IonCard >
      </IonContent>
    </IonPage>
  );
};

export default MovieListPage;
