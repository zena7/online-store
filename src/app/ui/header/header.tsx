import { Link } from 'react-router-dom';
import { Container } from '../../../shared/ui/container';
import { CONFIG } from '../../../shared/libraries/router-config';
import styles from './header.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <Link to={CONFIG.HOME.LINK}>HOME</Link>
        <p>total</p>
        <Link to={CONFIG.BASKET.LINK}>BASKET</Link>
      </Container>
    </div>
  );
}
