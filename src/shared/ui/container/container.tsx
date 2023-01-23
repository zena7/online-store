import styles from './container.module.css';
import clsx from 'clsx';

export interface ContainerProps {
  children: React.ReactNode;
  dataLayout?: string;
  className?: string;
}

export function Container({ children, dataLayout, className }: ContainerProps) {
  return (
    <div
      className={clsx(styles.container, className && className)}
      data-layout={dataLayout || undefined}
    >
      {children}
    </div>
  );
}
