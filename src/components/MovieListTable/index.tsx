import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import './styled.css';

interface MovieListTableProps {
  data: any
}

class MovieListTable extends React.Component<MovieListTableProps> {

  render() {
    return (
      <IonGrid>
        <IonRow color="success">
          <IonCol size-xs="3" size-md="3">Id</IonCol>
          <IonCol size-xs="3" size-md="3">Year</IonCol>
          <IonCol size-xs="3" size-md="3">Title</IonCol>
          <IonCol size-xs="3" size-md="3">Winner?</IonCol>
        </IonRow>

        {this.props.data && this.props.data.content.map((item: any, index: any) => {
          return (
            <IonRow>
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
}

export default MovieListTable;
