import { useEffect, useState } from 'react';
import { PaginatorParams } from '../types/paginator-params.type';
import axios from 'axios';

export function useFetch<T = unknown>(params: PaginatorParams) {
  const apiUrl = 'https://tools.texoit.com/backend-java/api/movies';
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(apiUrl, { params })
      .then((response) => {
        setData(response.data)
      }).catch((err) => {
        setError(err)
      }).finally(() => {
        setIsFetching(false)
      });
  }, [params])

  return { data, error, isFetching };
}
