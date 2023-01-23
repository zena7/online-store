import { useRouteError } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import styles from './styles.module.css';

function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <Container className={styles.error}>
      <h1>404</h1>
      <div className={styles.discription}>
        <p>This page was not found!</p>
        <p> {error.statusText || error.message}</p>
      </div>
    </Container>
  );
}

export default ErrorPage;
