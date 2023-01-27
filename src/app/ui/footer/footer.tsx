import { Container } from '@/shared/ui/container';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.info}>
        <p>
          MARKETT ENGINEERED BY{' '}
          <a href="https://github.com/zena7" target="_blank" rel="noreferrer">
            ZENA7
          </a>{' '}
          &{' '}
          <a
            href="https://github.com/MishaMgla"
            target="_blank"
            rel="noreferrer"
          >
            MISHAMGLA
          </a>
        </p>
        <p>© 2023 MARKETT. ALL RIGHTS RESERVED</p>
      </Container>
    </footer>
  );
}
