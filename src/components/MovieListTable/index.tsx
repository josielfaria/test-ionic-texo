import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { debounce } from 'lodash';
import React, { useRef } from 'react';
import { MovieList } from '../../types/movie-list-data.type';
import './styled.css';

interface MovieListTableProps {
  data: MovieList | null,
  updateMovieList: (year: string, winner: string) => void,
}

const MovieListTable: React.FC<MovieListTableProps> = ({ data, updateMovieList }) => {

  const onInput = useRef(
    debounce((input: string, value: string) => {
      let yearValue = '';
      let winnerValue = '';

      (input === 'inputYear')
        ? yearValue = value
        : winnerValue = value;

      updateMovieList(yearValue, winnerValue);
    }, 1000)
  ).current;

  return (
    <IonGrid>
      <IonRow color="success">
        <IonCol class="ion-text-center" size-xs="3" size-md="3">Id</IonCol>
        <IonCol class="ion-text-center search-by-year" size-xs="3" size-md="3">
          <p>Year</p>
          <input type="text" onChange={(e) => onInput('inputYear', e.target.value)} />
        </IonCol>
        <IonCol class="ion-text-center" size-xs="3" size-md="3">Title</IonCol>
        <IonCol class="ion-text-center" size-xs="3" size-md="3">
          <p>Winner?</p>
          <select name="select" onChange={(e) => onInput('inputWinner', e.target.value)}>
            <option value="">Yes/No</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </IonCol>
      </IonRow>

      {data && data.content.map((item: any, index: any) => {
        return (
          <IonRow key={index}>
            <IonCol size-xs="3" size-md="3">{item.id}</IonCol>
            <IonCol size-xs="3" size-md="3">{item.year}</IonCol>
            <IonCol size-xs="3" size-md="3">{item.title}</IonCol>
            <IonCol size-xs="3" size-md="3">{String(item.winner)}</IonCol>
          </IonRow>
        )
      })}
    </IonGrid>
  );
}

export default MovieListTable;
