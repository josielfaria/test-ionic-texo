export const mockMovieList1 = {
  content: [
    {
      id: 1,
      year: 1980,
      title: 'The Formula',
      studios: ['MGM', 'United Artists'],
      producers: ['Steve Shagan'],
      winner: false,
    },
    {
      id: 2,
      year: 1980,
      title: 'Friday the 13th',
      studios: ['Paramount Pictures'],
      producers: ['Sean S. Cunningham'],
      winner: false,
    },
  ],
  pageable: {
    sort: { unsorted: true, sorted: false, empty: true },
    offset: 0,
    pageSize: 11,
    pageNumber: 0,
    paged: true,
    unpaged: false,
  },
  totalPages: 19,
  totalElements: 206,
  last: false,
  size: 11,
  number: 0,
  sort: { unsorted: true, sorted: false, empty: true },
  first: true,
  numberOfElements: 11,
  empty: false,
};

export const mockMovieList2 = {
  content: [
    {
      id: 12,
      year: 1981,
      title: 'Endless Love',
      studios: ['PolyGram', 'Universal Studios'],
      producers: ['Dyson Lovell'],
      winner: false,
    },
    {
      id: 13,
      year: 1981,
      title: "Heaven's Gate",
      studios: ['United Artists'],
      producers: ['Joann Carelli'],
      winner: false,
    },
  ],
  pageable: {
    sort: { unsorted: true, sorted: false, empty: true },
    offset: 11,
    pageSize: 11,
    pageNumber: 1,
    paged: true,
    unpaged: false,
  },
  totalPages: 19,
  totalElements: 206,
  last: false,
  size: 11,
  number: 1,
  sort: { unsorted: true, sorted: false, empty: true },
  first: false,
  numberOfElements: 11,
  empty: false,
};