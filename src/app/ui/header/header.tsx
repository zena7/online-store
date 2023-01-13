import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import { CONFIG } from '@/shared/libraries/router-config';
import styles from './header.module.css';
import { TotalAmountCounter } from '@/features/total-amount-counter/total-amount-counter';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link to={CONFIG.HOME.LINK}>HOME</Link>
        <div>
          <p>total amount:</p>
          <TotalAmountCounter />
        </div>
        <Link to={CONFIG.BASKET.LINK}>BASKET</Link>
      </Container>
    </header>
  );
}
