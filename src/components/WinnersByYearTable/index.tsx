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

  const searchWinnersByYear = () => {
    if (!!paginatorParams.year) {
      axios.get(apiUrl, { params: paginatorParams })
        .then((response) => {
          setData(response.data)
        })
    }
  }

  const onInput = useRef(
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
        <IonGrid>
          <IonRow>
            <IonCol size-xs="10">
              <IonInput type="number" onChange={(e: any) => onInput(e.target.value)}></IonInput>
            </IonCol>
            <IonCol size-xs="2">
              <IonButton class='search-button' color="primary" size="small" onClick={(e: any) => searchWinnersByYear()}>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

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

// import React, { useRef, useState } from 'react';
// import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonInput, IonRow } from '@ionic/react';
// import { debounce } from 'lodash';
// import { MovieList } from '../../types/movie-list-data.type';
// import { search } from 'ionicons/icons';
// import './styled.css'

// interface WinnersByYearTableProps {
//   data: MovieList | null,
//   updateWinnersByYear: (year: string) => void,
// }

// const WinnersByYearTable: React.FC<WinnersByYearTableProps> = ({ data, updateWinnersByYear }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const onInput = useRef(
//     debounce((yearValue: string) => {
//       console.log('yearValue', yearValue)
//       setSearchValue(yearValue);
//       // updateWinnersByYear(yearValue);
//     }, 500)
//   ).current;

//   const searchWinnersByYear = () => {
//     console.log('send searchValue', searchValue)
//     updateWinnersByYear(searchValue);
//   }

//   return (
//     <IonCard>
//       <IonCardHeader>
//         <IonCardTitle>Top 3 studios with winners</IonCardTitle>
//       </IonCardHeader>

//       <IonCardContent>
//         <IonGrid>
//           <IonRow>
//             <IonCol size-xs="10">
//               {/* <IonInput type="text" onChange={(e) => onInput(e.target.value)}></IonInput> */}
//               <input className='search-input' type="number" onChange={(e) => onInput(e.target.value)} />
//             </IonCol>
//             <IonCol size-xs="2">
//               <IonButton color="primary" size="small" onClick={(e: any) => searchWinnersByYear()}>
//                 <IonIcon slot="icon-only" icon={search}></IonIcon>
//               </IonButton>
//             </IonCol>
//           </IonRow>

//           <IonRow color="success">
//             <IonCol class="ion-text-center" size-xs="4" size-md="4">Id</IonCol>
//             <IonCol class="ion-text-center" size-xs="4" size-md="4">Year</IonCol>
//             <IonCol class="ion-text-center" size-xs="4" size-md="4">Title</IonCol>
//           </IonRow>

//           {data && data.content.map((item: any, index: any) => {
//             return (
//               <IonRow key={index}>
//                 <IonCol size-xs="4" size-md="4">{item.id}</IonCol>
//                 <IonCol size-xs="4" size-md="4">{item.year}</IonCol>
//                 <IonCol size-xs="4" size-md="4">{item.title}</IonCol>
//               </IonRow>
//             )
//           })}
//         </IonGrid>
//       </IonCardContent>
//     </IonCard >
//   );
// }

// export default WinnersByYearTable;
