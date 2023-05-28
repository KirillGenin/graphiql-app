import React from 'react';
import { NavLink as NavLinkUi } from '@mantine/core';
import { useNavigate } from 'react-router';
import { MainRoutes, Registration } from '../../../types/enums';
import { IconDatabaseSearch, IconHome2, IconLogin, IconLogout } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import LanguageBar from './LanguageBar';
import MainButton from '../../common/MainButton';
import { toggleRegType } from '../../../app/slices/authSlice';
import { useAppDispatch } from '../../../app/hooks';
import cookie from 'cookie';

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

  const styles = {
    root: {
      borderRadius: '0.5rem',
      ':hover': { backgroundColor: '#f3f0f0' },
    },
  };

  return (
    <>
      <NavLinkUi
        w={'8.5rem'}
        styles={styles}
        label={t('navHome')}
        onClick={() => navigate(MainRoutes.WelcomePage)}
        icon={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLinkUi
        w={'8.5rem'}
        styles={styles}
        label="GraphiQL"
        onClick={() => navigate(MainRoutes.GraphPage)}
        icon={<IconDatabaseSearch size={'1.1rem'} />}
      />
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
    </>
  );
};

export default Navigation;
