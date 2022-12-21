import { Link } from 'react-router-dom';
import { Container } from '../../../shared/ui/container';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <Link to="/">HOME</Link>
        <div>
          <p>total</p>
          <Link to="/basket">BASKET</Link>
        </div>
      </Container>
    </div>
  );
}
