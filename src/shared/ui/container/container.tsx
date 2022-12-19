import styles from './container.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  dataLayout?: string;
}

export function Container({ children, dataLayout }: ContainerProps) {
  return (
    <div className={styles.container} data-layout={dataLayout || undefined}>
      {children}
    </div>
  );
}
