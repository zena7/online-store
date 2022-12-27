import styles from './list.module.css';

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className={styles.list}>{children}</ul>;
}
