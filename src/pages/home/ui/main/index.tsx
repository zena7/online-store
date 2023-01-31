import { ProductList } from '@/features/product-list';
import { Pagination } from '@/shared/ui/pagination';
import { SortingForm } from '@/shared/ui/select-form';
import { useState, createContext } from 'react';
import { RootState } from '@/store/configure-store';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '@/features/select-form/store';
import styles from './styles.module.css';

export const MainContext = createContext<any | null>(null);

export function Main() {
  const page = useSelector((state: RootState) => state.sorting.page);
  const limit: number = useSelector((state: RootState) => state.sorting.limit);
  const [amountProductsInRowSix, setAmountProductsInRowSix] = useState(false);
  const [total, setTotal] = useState<any | null>(100);
  const skip = page * limit;
  const dispatch = useDispatch();

  const handleClickPrev = () => {
    dispatch(decrementPage());
    window.scrollTo(0, 0);
  };
  const handleClickNext = () => {
    dispatch(incrementPage());
    window.scrollTo(0, 0);
  };
  const handleAmountOfProductsInRow = (value: boolean) =>
    setAmountProductsInRowSix(value);

  return (
    <main className={styles.main}>
      <MainContext.Provider value={{ total, setTotal }}>
        <SortingForm
          handleAmountOfProductsInRow={handleAmountOfProductsInRow}
        />
        <ProductList
          limit={limit}
          skip={skip}
          amountOfProductsInRow={amountProductsInRowSix}
          page={page}
        />
        <Pagination
          limit={limit}
          skip={skip}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
          className={styles.containerPagination}
        />
      </MainContext.Provider>
    </main>
  );
}
