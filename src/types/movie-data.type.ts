type MovieData = {
  id: number;
  year: number;
  title: string;
  studios: Array<string>;
  producers: Array<string>;
  winner: boolean;
}

export type MovieList = {
  content: Array<MovieData>,
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean
    },
    pageSize: number;
    pageNumber: number;
    offset: number;
    paged: boolean,
    unpaged: boolean;
  },
  totalElements: number;
  last: boolean;
  totalPages: number;
  first: boolean,
  sort: {
    sorted: boolean;
    unsorted: boolean
  }, number: number;
  numberOfElements: number;
  size: number;
}
