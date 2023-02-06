import { Product } from '@/entities/product/types';
import styles from './styles.module.css';

type DataProps = {
  data: Product | undefined;
  convertData: (arg: string) => string;
};

export const Breadcrumbs = ({ data, convertData }: DataProps) => {
  return (
    <ul className={styles.breadcrumb}>
      <li>Store / </li>
      <li> {data && convertData(data.category)} / </li>
      <li> {data && convertData(data.brand)} /</li>
      <li className={styles.currentItem}>
        {data && convertData(data.category)}
      </li>
    </ul>
  );
};
