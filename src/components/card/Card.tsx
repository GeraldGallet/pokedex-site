import { FC, ReactNode } from 'react';
import styles from './card.module.css';

type CardProps = {
  children: ReactNode
}

export const Card: FC<CardProps> = ({ children }) => <div className={styles.card}>{children}</div>;
