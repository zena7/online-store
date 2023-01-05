import { forwardRef } from 'react';
import styles from './styles.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button {...props} className={styles.btn} ref={ref}>
        {children}
      </button>
    );
  },
);
