import Link from 'next/link';
import styles from './button.module.css';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type HTMLButtonProps = {
  component?: 'button';
} & ComponentPropsWithoutRef<'button'>;

type HTMLAnchorProps = {
  component: 'a';
  href: string;
} & ComponentPropsWithoutRef<'a'>;

type ButtonProps = (HTMLButtonProps | HTMLAnchorProps) & {
  children: ReactNode;
  theme?: 'outline' | 'gradient' | 'transparent';
}

export function Button({ children, theme = 'gradient', ...props }: ButtonProps) {
  if (props.component === 'a') {
    return (
      <Link {...props} className={`button ${theme} ${styles.button}`}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={`button ${theme} ${styles.button}`}>
      {children}
    </button>
  );
}