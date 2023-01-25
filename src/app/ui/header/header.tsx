import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui/container';
import { CONFIG } from '@/shared/libraries/router-config';
import { TotalAmountCounter } from '@/features/total-amount-counter/total-amount-counter';
import { TotalPriceCounter } from '@/features/total-price-counter/total-price-counter';
import { IconBasket } from './assets/iconBasket';
import storeLogo from '@/assets/img/store-logo.png';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Link to={CONFIG.HOME.LINK} className={styles.linkStoreLogo}>
          <img src={storeLogo} className={styles.storeLogo} alt="logoShop" />
        </Link>
        <div className={styles.basketInfo}>
          <p>
            <TotalPriceCounter />{' '}
          </p>
          <Link to={CONFIG.BASKET.LINK} className={styles.linkBasket}>
            <TotalAmountCounter className={styles.amount} />
            <IconBasket className={styles.iconBasket} />
          </Link>
        </div>
      </Container>
    </header>
  );
}
