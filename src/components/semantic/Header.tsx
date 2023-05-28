import React, { useEffect, useState } from 'react';
import { Burger, Menu } from '@mantine/core';
import styles from './Header.module.scss';
import Navigation from './UI/Navigation';

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header className={isScroll ? `${styles.header} ${styles.sticky}` : styles.header}>
      <Menu shadow="md" width={'10rem'}>
        <Menu.Target>
          <Burger className={styles.burger} opened={false} size={'1.5rem'} />
        </Menu.Target>
        <Menu.Dropdown>
          <Navigation />
        </Menu.Dropdown>
      </Menu>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
    </header>
  );
};

export default Header;
