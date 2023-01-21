import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import { CONFIG } from '@/shared/libraries/router-config';
import styles from './header.module.css';
import { TotalAmountCounter } from '@/features/total-amount-counter/total-amount-counter';
import { TotalPriceCounter } from '@/features/total-price-counter/total-price-counter';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link to={CONFIG.HOME.LINK}>HOME</Link>
        <div>
          <p>total amount:</p>
          <TotalAmountCounter />
          <p>total price:</p>
          <TotalPriceCounter />
        </div>
        <Link to={CONFIG.BASKET.LINK}>BASKET</Link>
      </Container>
    </header>
  );
}
