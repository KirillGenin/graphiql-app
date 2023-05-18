import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainRoutes } from '../../types/enums';
import cookie from 'cookie';
import { Button } from '@mantine/core';
import { NavLink as NavLinkUi } from '@mantine/core';
import { IconHome2, IconLogout, IconLogin, IconDatabaseSearch } from '@tabler/icons-react';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { email, token, id } = cookie.parse(document.cookie);
    document.cookie = `email=${email}; max-age=-1;`;
    document.cookie = `id=${id}; max-age=-1;`;
    document.cookie = `token=${token}; max-age=-1;`;
    navigate(MainRoutes.WelcomePage);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <NavLinkUi
          w={'8.5rem'}
          label="Home"
          onClick={() => navigate(MainRoutes.WelcomePage)}
          icon={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLinkUi
          w={'8.5rem'}
          label="Registration"
          onClick={() => navigate(MainRoutes.AuthPage)}
          icon={<IconLogin size={'1.2rem'} />}
        />
        <NavLinkUi
          w={'8.5rem'}
          label="GraphiQL"
          onClick={() => navigate(MainRoutes.GraphPage)}
          icon={<IconDatabaseSearch size={'1.1rem'} />}
        />
      </nav>
      <Button
        onClick={handleLogout}
        rightIcon={<IconLogout size={'1.2rem'} />}
        variant="light"
        color="dark"
        radius="md"
        bg="#ffffff"
        w={'8rem'}
        styles={{
          root: {
            ':hover': { backgroundColor: '#f3f0f0' },
          },
        }}
      >
        Log out
      </Button>
    </header>
  );
};

export default Header;
