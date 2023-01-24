import { useDispatch, useSelector } from 'react-redux';
import { setLimit, setSort } from '@/features/select-form/store';
import { RootState } from '@/store/configure-store';
import { Button } from '../button';
import { Search } from './search/search';
import icon4to4 from '@/assets/img/block.png';
import icon6to6 from '@/assets/img/bigBlock.png';
import styles from './styles.module.css';

export interface SortItem {
  sortProperty: string;
}
type PropsSortingForm = {
  handleAmountOfProductsInRow: (arg: boolean) => void;
};

export function SortingForm({ handleAmountOfProductsInRow }: PropsSortingForm) {
  const dispatch = useDispatch();

  const handleSort = (event: React.ChangeEvent) => {
    const target = event.target as typeof event.target & { value: string };
    dispatch(setSort({ sortProperty: target.value }));
  };

  const limit = useSelector((state: RootState) => state.sorting.limit);
  const handleSetLimitProducts = (event: React.ChangeEvent) => {
    const target = event.target as typeof event.target & { value: string };
    dispatch(setLimit(Number(target.value)));
  };

  const handlerClickIconSix = () => {
    handleAmountOfProductsInRow(true);
  };
  const handlerClickIconFour = () => {
    handleAmountOfProductsInRow(false);
  };

  return (
    // <div className={styles.containerViewOptions}>
    <div className={styles.containerSort}>
      <Search />
      <form name="showNumbersOfProducts" className={styles.formSelect}>
        <label>
          <select
            name="sortingProducts"
            id="sort-select"
            value={limit}
            className={styles.selectForm}
            onChange={handleSetLimitProducts}
          >
            <option value="8"> Show 8 </option>
            <option value="48"> Show 48 </option>
            <option value="64">Show 64</option>
            <option value="80">Show 80</option>
            <option value="100">Show 100</option>
          </select>
        </label>
      </form>
      <form name="sortingProducts" className={styles.formSelect}>
        <label>
          <select
            name="sortingProducts"
            id="sort-select"
            className={styles.selectForm}
            onChange={handleSort}
          >
            <option value="" disabled>
              Sort{' '}
            </option>
            <option value="price decrease">By price high to low</option>
            <option value="price increase">By price low to high</option>
            <option value="rating increase">By rating increase </option>
            <option value="rating decrease">By rating decrease </option>
            <option value="discountPercentage increase">
              By discount increase
            </option>
            <option value="discountPercentage decrease">
              By discount decrease
            </option>
          </select>
        </label>
      </form>
      <Button className={styles.icon}>
        <img src={icon4to4} alt="icon4to4" onClick={handlerClickIconFour} />
      </Button>
      <Button className={`${styles.icon} ${styles.iconSix}`}>
        <img src={icon6to6} alt="icon6to6" onClick={handlerClickIconSix} />
      </Button>
    </div>
    // </div>
  );
}
