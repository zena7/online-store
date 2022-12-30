<<<<<<< HEAD
import clsx from 'clsx';
import styles from './list.module.css';

export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export function List({ children, className }: ListProps) {
  return (
    <ul className={clsx(styles.list, className && className)}>{children}</ul>
  );
=======
import styles from './list.module.css';

interface ListProps {
  children: React.ReactNode;
}

export function List({ children }: ListProps) {
  return <ul className={styles.list}>{children}</ul>;
>>>>>>> refactor: to actualize main
}
