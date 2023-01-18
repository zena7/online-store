// import { Product } from '@/entities/product/types';
import { ProductList } from '@/features/product-list';
import { Pagination } from '@/shared/ui/pagination';
import { SortingForm } from '@/shared/ui/select-form';
import { useState } from 'react';
import { RootState } from '@/store/configure-store';
import { useSelector } from 'react-redux';

import styles from './styles.module.css';

export function Main() {
  const [page, setPage] = useState(0);
  const limit: number = useSelector((state: RootState) => state.sorting.limit);

  const total = 100;
  const skip = page * limit;

  const handleClickPrev = () => {
    setPage((prevState) => prevState - 1);
    window.scrollTo(0, 0);
  };
  const handleClickNext = () => {
    setPage((prevState) => prevState + 1);
    window.scroll(0, 0);
  };

  return (
    <main className={styles.main}>
      <SortingForm />
      <ProductList page={page} limit={limit} skip={skip} />
      <Pagination
        limit={limit}
        skip={skip}
        total={total}
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        className={styles.containerPagination}
      />
    </main>
  );
}
