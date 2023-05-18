import React, { FC } from 'react';
import styles from './Main.module.css';

interface IMain {
  children: JSX.Element;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
