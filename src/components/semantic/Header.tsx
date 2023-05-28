import React from 'react';
import { Burger, Menu } from '@mantine/core';
import styles from './Header.module.scss';
import Navigation from './UI/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
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
