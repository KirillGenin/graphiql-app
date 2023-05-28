import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainRoutes, Registration } from '../../types/enums';
import cookie from 'cookie';
import { Burger, Menu } from '@mantine/core';
import { IconLogin, IconLogout } from '@tabler/icons-react';
import styles from './Header.module.scss';
import MainButton from '../common/MainButton';
import Navigation from './UI/Navigation';
import LanguageBar from './UI/LanguageBar';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../app/hooks';
import { toggleRegType } from '../../app/slices/authSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSignIn = () => {
    dispatch(toggleRegType(Registration.SignUp));
    navigate(MainRoutes.AuthPage);
  };

  const handleLogIn = () => {
    dispatch(toggleRegType(Registration.LogIn));
    navigate(MainRoutes.AuthPage);
  };

  const handleLogout = async () => {
    const { email, token, id } = cookie.parse(document.cookie);
    document.cookie = `email=${email}; max-age=-1;`;
    document.cookie = `id=${id}; max-age=-1;`;
    document.cookie = `token=${token}; max-age=-1;`;
    navigate(MainRoutes.WelcomePage);
  };

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
      <div>
        <LanguageBar />
        <MainButton
          onClick={handleSignIn}
          title={t('signup')!}
          type="button"
          rightIcon={<IconLogin size={'1.2rem'} />}
        />
        <MainButton
          onClick={handleLogIn}
          title={t('login')!}
          type="button"
          rightIcon={<IconLogin size={'1.2rem'} />}
        />
        <MainButton
          onClick={handleLogout}
          title={t('logout')!}
          type="button"
          rightIcon={<IconLogout size={'1.2rem'} />}
        />
      </div>
    </header>
  );
};

export default Header;
