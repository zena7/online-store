import clsx from 'clsx';
import { useContext } from 'react';
import { Button } from '@/shared/ui/button';
import { MainContext } from '@/pages/home/ui/main';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/configure-store';

export interface PaginationProps {
  handleClickPrev?: () => void;
  handleClickNext?: () => void;
  className: string;
  limit: number;
  skip: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  handleClickPrev,
  handleClickNext,
  className,
  limit,
  skip,
}) => {
  const { total } = useContext(MainContext);
  const isFirstPage = skip === 0;
  const isLastPage = limit + skip >= total;
  const pages = useSelector((state: RootState) => state.sorting.pages);
  return (
    <div className={clsx(styles.pagination, className && className)}>
      <Button
        onClick={() => {
          handleClickPrev && handleClickPrev();
        }}
        disabled={isFirstPage}
        className={styles.btnPagination}
      >
        Prev
      </Button>
      <Button
        onClick={() => {
          handleClickNext && handleClickNext();
        }}
        disabled={isLastPage}
        className={styles.btnPagination}
      >
        Next
      </Button>
    </div>
  );
};
