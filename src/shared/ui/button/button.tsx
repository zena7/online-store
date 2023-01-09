import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        className={clsx(styles.btn, className && className)}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);
