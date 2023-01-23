import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import { CONFIG } from '@/shared/libraries/router-config';
import { TotalAmountCounter } from '@/features/total-amount-counter/total-amount-counter';
import { TotalPriceCounter } from '@/features/total-price-counter/total-price-counter';
import storeLogo from '@/assets/img/store-logo.png';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link to={CONFIG.HOME.LINK} className={styles.linkStoreLogo}>
          <img src={storeLogo} className={styles.storeLogo} alt="logoShop" />
        </Link>
        <div className={styles.wrapper}>
          <div className={styles.counter}>
            <p>Total amount: {<TotalAmountCounter />}</p>
            <p>Total price: {<TotalPriceCounter />} $</p>
          </div>
          <Link to={CONFIG.BASKET.LINK} className={styles.linkBasket}>
            <svg
              className={styles.iconBasket}
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>
        </div>
      </Container>
    </header>
  );
}
