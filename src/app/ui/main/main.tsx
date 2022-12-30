// import { ReactReduxContextInstance } from 'react-redux/es/components/Context';
import styles from './main.module.css';

interface NodeList {
  children: React.ReactNode;
}

export function Main({ children }: NodeList) {
  return (
    <main data-layout="main" className={styles.main}>
      {children}
    </main>
  );
}
