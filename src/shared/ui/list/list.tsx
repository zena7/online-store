import clsx from 'clsx';
import styles from './list.module.css';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}

export function List({ children, className, ...props }: ListProps) {
  return (
    <ul {...props} className={clsx(styles.list, className && className)}>
      {children}
    </ul>
  );
}
