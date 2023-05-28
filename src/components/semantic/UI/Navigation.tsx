import React from 'react';
import { NavLink as NavLinkUi } from '@mantine/core';
import { useNavigate } from 'react-router';
import { MainRoutes, Registration } from '../../../types/enums';
import { IconDatabaseSearch, IconHome2, IconLogin, IconLogout } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import LanguageBar from './LanguageBar';
import { toggleRegType } from '../../../app/slices/authSlice';
import { useAppDispatch } from '../../../app/hooks';
import cookie from 'cookie';
import styles from '../Header.module.scss';

const Navigation = () => {
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

  const stylesLink = {
    root: {
      borderRadius: '0.5rem',
      ':hover': { backgroundColor: '#f3f0f0' },
    },
  };

  return (
    <div className={styles.nav}>
      <NavLinkUi
        w={'8.5rem'}
        styles={stylesLink}
        label={t('navHome')}
        onClick={() => navigate(MainRoutes.WelcomePage)}
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLinkUi
        w={'8.5rem'}
        styles={stylesLink}
        label="GraphiQL"
        onClick={() => navigate(MainRoutes.GraphPage)}
        icon={<IconDatabaseSearch size={'1.1rem'} />}
      />
      <LanguageBar />
      <NavLinkUi
        w={'8.5rem'}
        styles={stylesLink}
        label={t('signup')}
        onClick={handleSignIn}
        icon={<IconLogin size={'1.2rem'} />}
      />
      <NavLinkUi
        w={'8.5rem'}
        styles={stylesLink}
        label={t('login')}
        onClick={handleLogIn}
        icon={<IconLogin size={'1.2rem'} />}
      />
      <NavLinkUi
        w={'8.5rem'}
        styles={stylesLink}
        label={t('logout')}
        onClick={handleLogout}
        icon={<IconLogout size={'1.2rem'} />}
      />
    </div>
  );
};

export default Navigation;
