// import { Product } from '@/entities/product/types';
import { ProductList } from '@/features/product-list';
import { Pagination } from '@/shared/ui/pagination';
import { SortingForm } from '@/shared/ui/select-form';
import { useState } from 'react';
import styles from './styles.module.css';

export function Main() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const total = 100;
  const skip = page * limit;

  const handleClickPrev = () => {
    setPage((prevState) => prevState - 1);
  };
  const handleClickNext = () => {
    setPage((prevState) => prevState + 1);
    console.log('page', page);
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
