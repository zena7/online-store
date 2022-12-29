import clsx from 'clsx';
import styles from './list.module.css';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export function List({ children, className }: ListProps) {
  return (
    <ul className={clsx(styles.list, className && className)}>{children}</ul>
  );
}
