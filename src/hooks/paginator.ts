import { useEffect, useState } from 'react';

export function useTotalPagesNumber<T = number[]>(totalPages: number) {
  const [data, setData] = useState<T | number[]>([]);

  useEffect(() => {
    let newTotalPages = [];
    for (let i = 0; i < totalPages; i++) {
      newTotalPages.push(i + 1);
    }
    setData(newTotalPages)
  }, [totalPages])

  return { data };
}

export function usePagesView<T = unknown>(totalPages: number, qtdPagesView: number, skip: string) {
  const [data, setData] = useState<T | number[]>([]);
  const [newSelectedPage, SetNewSelectedPage] = useState<number>(1);

  useEffect(() => {
    let pagesView = [];
    for (let i = 1; i < (qtdPagesView + 1); i++) {
      pagesView.push(i);
    }

    if (skip === 'init') {
      setData(pagesView);

    } else if (skip === 'skip') {
      const initPageView = (totalPages - qtdPagesView);
      pagesView = [];
      for (let i = 1; i < (qtdPagesView + 1); i++) {
        pagesView.push(initPageView + i);
      }

      SetNewSelectedPage(totalPages);
      setData(pagesView);

    } else if (skip === 'backSkip') {
      SetNewSelectedPage(1);
      setData(pagesView);
    }
  }, [totalPages, qtdPagesView, skip])

  return { data, newSelectedPage };
}
