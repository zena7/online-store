import { Button } from '@/shared/ui/button';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Product } from '@/entities/product/types';

export interface PaginationProps {
  handleClickPrev?: () => void;
  handleClickNext?: () => void;
  className: string;
  limit: number;
  skip: number;
  total: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  handleClickPrev,
  handleClickNext,
  className,
  limit,
  skip,
  total,
}) => {
  const isFirstPage = skip === 0;
  const isLastPage = limit + skip >= total;

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
