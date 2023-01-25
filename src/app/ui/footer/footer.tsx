import { Container } from '@/shared/ui/container';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          MARKETT ENGINEERED BY <a href="https://github.com/zena7">ZENA7</a> &{' '}
          <a href="https://github.com/MishaMgla">MISHAMGLA</a>
        </p>
        <p>© 2023 MARKETT. ALL RIGHTS RESERVED</p>
      </Container>
    </footer>
  );
}
