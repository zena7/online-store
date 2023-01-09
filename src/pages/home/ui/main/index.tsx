import { ProductList } from '@/features/product-list';
import styles from './styles.module.css';

export function Main() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  );
}
