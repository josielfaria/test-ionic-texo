import React, { useEffect, useState } from 'react';
import { usePagesView } from '../../hooks/paginator';
import { IonIcon } from '@ionic/react';
import { play, playSkipBack, playSkipForward } from 'ionicons/icons';
import './styled.css';

interface PaginatorProps {
  totalPages: number | undefined;
  qtdPagesView: number;
  updatePage: (pageSelected: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  totalPages = 0,
  qtdPagesView,
  updatePage,
}) => {
  const qtdMaxPagesView = totalPages < qtdPagesView ? totalPages : qtdPagesView;

  const [pageSelected, setPageSelected] = useState<number>(1);
  const [skip, setSkip] = useState<string>('');
  const { data: pagesView, newSelectedPage } = usePagesView<Array<number>>(
    totalPages,
    qtdMaxPagesView,
    skip
  );

  const isActive = (pageNumber: number) => pageNumber === pageSelected;
  const isDisabledNext = pageSelected === totalPages;
  const isDisabledPrev = pageSelected === 1;
  const isDisabledSkip = pageSelected > totalPages - qtdMaxPagesView;
  const isDisabledBackSkip = pageSelected < qtdMaxPagesView + 1;
  const highestPageView = Math.max(...pagesView);
  const smallerPageView = Math.min(...pagesView);

  useEffect(() => {
    setSkip('');
    setPageSelected(newSelectedPage);
  }, [newSelectedPage, skip]);

  useEffect(() => {
    updatePage(pageSelected - 1);
  }, [pageSelected]);

  useEffect(() => {
    setSkip('init');
  }, [totalPages]);

  const nextPage = (): void => {
    if (pageSelected >= totalPages) {
      return;
    }

    if (pageSelected === highestPageView) {
      const newPagesView = pagesView;
      newPagesView.shift();
      newPagesView.push(pageSelected + 1);
    }

    setPageSelected(pageSelected + 1);
  };

  const prevPage = (): void => {
    if (pageSelected <= 1) {
      return;
    }

    if (pageSelected === smallerPageView) {
      let newPagesView = pagesView;
      newPagesView.pop();
      newPagesView.unshift(pageSelected - 1);
    }

    setPageSelected(pageSelected - 1);
  };

  return (
    <p
      size-xs='2'
      size-md='2'
      className='paginator ion-justify-content-center ion-align-items-center'
    >
      <span
        className={isDisabledBackSkip ? 'disabled' : ''}
        onClick={() => setSkip('backSkip')}
      >
        <IonIcon icon={playSkipBack}></IonIcon>
      </span>

      <span
        className={isDisabledPrev ? 'disabled' : ''}
        onClick={() => prevPage()}
      >
        <IonIcon class='flip-icon ion-align-items-center' icon={play}></IonIcon>
      </span>

      {pagesView &&
        pagesView.map((pageNumber: number, index: any) => {
          return (
            <span
              key={index}
              className={isActive(pageNumber) ? 'active' : ''}
              onClick={() => setPageSelected(pageNumber)}
            >
              {pageNumber}
            </span>
          );
        })}

      <span
        className={isDisabledNext ? 'disabled' : ''}
        onClick={() => nextPage()}
      >
        <IonIcon icon={play}></IonIcon>
      </span>

      <span
        className={isDisabledSkip ? 'disabled' : ''}
        onClick={() => setSkip('skip')}
      >
        <IonIcon icon={playSkipForward}></IonIcon>
      </span>
    </p>
  );
};

export default Paginator;
