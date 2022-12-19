import { Sidebar } from '../sidebar';
import { Main } from '../main';
import styles from './content.module.css';

export function Content() {
  return (
    <div data-layout="content" className={styles.content}>
      <Sidebar />
      <Main />
    </div>
  );
}
