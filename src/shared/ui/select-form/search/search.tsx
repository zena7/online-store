import styles from './styles.module.css';
import { RootState } from '@/store/configure-store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '@/features/select-form/store';
import { useRef } from 'react';

export const Search = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent) => {
    const target = event.target as typeof event.target & { value: string };
    dispatch(setSearch(target.value));
  };
  const searchingValue = useSelector(
    (state: RootState) => state.sorting.search,
  );

  const handleClearInput = () => {
    dispatch(setSearch(''));
    searchInput.current && searchInput.current?.focus();
  };

  return (
    <form
      name="searchProducts"
      className={styles.searchForm}
      onSubmit={(event: React.SyntheticEvent) => event.preventDefault()}
    >
      <svg
        className={styles.iconSearch}
        enable-background="new 0 0 32 32"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
          id="XMLID_223_"
        />
      </svg>
      <input
        value={searchingValue}
        type="text"
        placeholder="Search"
        className={styles.selectForm}
        onChange={handleSearch}
        ref={searchInput}
      />
      {searchingValue && (
        <svg
          onClick={handleClearInput}
          className={styles.iconSearchClose}
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
        </svg>
      )}
    </form>
  );
};
