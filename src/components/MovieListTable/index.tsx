import React, { useRef } from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { debounce } from 'lodash';
import { MovieList } from '../../types/movie-list-data.type';
import Paginator from '../Paginator';
import './styled.css';

interface MovieListTableProps {
  data: MovieList | null,
  updateMovieList: (year: string, winner: string) => void,
  updatePageMovieList: (page: number) => void,
}

const MovieListTable: React.FC<MovieListTableProps> = ({ data, updateMovieList, updatePageMovieList }) => {

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

  const updatePage = (pageSelected: number): void => {
    updatePageMovieList(pageSelected);
  }

  const transformBooleanValue = (value: boolean): string => value ? "Yes" : "No";

  return (
    <IonGrid class="grid-table">
      <IonRow>
        <IonCol class="ion-text-center" size-xs="3" size-md="3">Id</IonCol>
        <IonCol class="ion-text-center search-by-year" size-xs="3" size-md="3">
          <p>Year</p>
          <input type="text" onChange={(e) => onInput("inputYear", e.target.value)} />
        </IonCol>
        <IonCol class="ion-text-center" size-xs="3" size-md="3">Title</IonCol>
        <IonCol class="ion-text-center" size-xs="3" size-md="3">
          <p>Winner?</p>
          <select name="select" onChange={(e) => onInput("inputWinner", e.target.value)}>
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
            <IonCol size-xs="3" size-md="3">{transformBooleanValue(item.winner)}</IonCol>
          </IonRow>
        )
      })}

      <IonRow>
        <IonCol size-xs="12" size-md="12">
          <Paginator totalPages={data?.totalPages} qtdPagesView={5} updatePage={updatePage}></Paginator>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default MovieListTable;
