import { ProductList } from '@/features/product-list';
import { Pagination } from '@/shared/ui/pagination';
import { SortingForm } from '@/shared/ui/select-form/ui';
import { useState } from 'react';
import { RootState } from '@/store/configure-store';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

const TOTAL = 100;
export function Main() {
  const [page, setPage] = useState(0);
  const limit: number = useSelector((state: RootState) => state.sorting.limit);

  const skip = page * limit;

  const handleClickPrev = () => {
    setPage((prevState) => prevState - 1);
    window.scrollTo(0, 0);
  };
  const handleClickNext = () => {
    setPage((prevState) => prevState + 1);
    window.scrollTo(0, 0);
  };

  return (
    <main className={styles.main}>
      <SortingForm />
      <ProductList page={page} limit={limit} skip={skip} />
      <Pagination
        limit={limit}
        skip={skip}
        total={TOTAL}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        className={styles.containerPagination}
      />
    </main>
  );
}
