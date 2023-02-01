import qs from 'qs';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@/shared/ui/list';
import { Product } from '@/entities/product/types';
import { ProductCard } from '@/features/product-list/ui/product-card';
import { useFetchProductsQuery } from '@/features/product-list/service';
import { basketSlice } from '@/features/basket/store';
import { RootState } from '@/store/configure-store';
import { MainContext } from '@/pages/home/ui/main';
import { setQueryProperties } from '@/features/select-form/store';
import styles from './styles.module.css';

type ProductListProps = {
  limit: number;
  skip: number;
  amountOfProductsInRow: boolean;
  page: number;
};

export function ProductList({
  limit,
  skip,
  amountOfProductsInRow,
  page,
}: ProductListProps) {
  const { data: { products = [] } = {}, isLoading } = useFetchProductsQuery({});
  const { total } = useContext(MainContext);
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAddClick = (product: Product) => () => {
    dispatch(basketSlice.actions.addProduct(product));
  };

  const handleDropClick = (id: number) => () => {
    dispatch(basketSlice.actions.dropProduct(id));
  };

  const sort = useSelector((state: RootState) => state.sorting.sort);
  const sortProductlist = (products: Product[]): Product[] => {
    const [value, operator]: string[] = sort.sortProperty.split(' ');
    const sortingProducts = [...products].sort((a, b) =>
      a[value as keyof Product] < b[value as keyof Product]
        ? -1
        : a[value as keyof Product] > b[value as keyof Product]
        ? 1
        : 0,
    );
    const result =
      operator === 'increase'
        ? sortingProducts
        : [...sortingProducts].reverse();

    return result;
  };

  const searchingValue = useSelector(
    (state: RootState) => state.sorting.search,
  );
  const { setTotal } = useContext(MainContext);
  const searchProducts = (): Product[] => {
    const result = [...products].filter((item) => {
      if (isFinite(searchingValue)) {
        const { price, stock } = item;
        return (
          price === Number(searchingValue) || stock === Number(searchingValue)
        );
      }
      const { title, description, brand, category } = item;
      const items = [title, description, brand, category];

      return items.some((item) =>
        item.toLowerCase().includes(searchingValue.toLowerCase()),
      );
    });
    setTotal(result.length);
    return result;
  };

  useEffect(() => {
    if (isMounted) {
      const queryString = qs.stringify(
        {
          sortBy: sort.sortProperty,
          searchValue: searchingValue,
          page: page,
        },
        { addQueryPrefix: true },
      );
      navigate(queryString);
    }

    setIsMounted(true);
  }, [sort, searchingValue, page]);

  useEffect(() => {
    if (window.location.search) {
      const param = qs.parse(window.location.search.slice(1));
      dispatch(setQueryProperties({ ...param }));
    }
  }, []);

  const setLimit = (array: Product[]) => {
    if (skip + limit < total) {
      return array.slice(skip, skip + limit);
    } else {
      return array.slice(-limit);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (products?.length === 0) {
    return <div> Products are over </div>;
  }

  setTotal(100);
  const listClasses = `${styles.list} ${
    amountOfProductsInRow ? styles.listIconSixActive : ''
  }`;
  const notFound = 'No results';
  const productArrayOptions = searchingValue ? searchProducts() : products;

  return (
    <>
      {total ? (
        <List className={listClasses}>
          {setLimit(
            sort.property !== ''
              ? sortProductlist(productArrayOptions)
              : productArrayOptions,
          )?.map((product) => (
            <li className={styles.item} key={product.id}>
              <ProductCard
                images={product.images}
                title={product.title}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                id={product.id}
                // id={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                onAddClick={handleAddClick(product)}
                onDropClick={handleDropClick(product.id)}
              />
            </li>
          ))}
        </List>
      ) : (
        <h2 className={styles.no}>{notFound}</h2>
      )}
    </>
  );
}
