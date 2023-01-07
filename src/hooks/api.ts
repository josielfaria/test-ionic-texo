import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetch<T = unknown>(url: string) {
  const api = 'https://tools.texoit.com/backend-java/api/movies' + url;
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(api)
      .then((response) => {
        setData(response.data)
      }).catch((err) => {
        setError(err)
      }).finally(() => {
        setIsFetching(false)
      });
  }, [api])

  return { data, error, isFetching };
}
