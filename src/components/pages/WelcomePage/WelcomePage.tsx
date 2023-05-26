import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../utils/hooks/useAuth';
import cookie from 'cookie';
import styles from './WelcomePage.module.scss';
import { Trans, useTranslation } from 'react-i18next';
import { Center } from '@mantine/core';

const WelcomePage = () => {
  const { isAuth } = useAuth();
  const { t } = useTranslation();

  const { email } = cookie.parse(document.cookie);

  return isAuth ? (
    <h2 className={styles.title}>
      <Trans i18nKey="welcomeUser">Hi! Welcome back </Trans>
      {`${email}`}
      <NavLink to={MainRoutes.GraphPage}></NavLink>
    </h2>
  ) : (
    <Center>
      <div style={{ textAlign: 'center' }}>
        <br />
        <h2 className={styles.title}>{t('welcomeNewcomer')}</h2>
        <br />
        <NavLink to={MainRoutes.AuthPage} className={styles.link}>
          {t('welcomeLink')}
        </NavLink>
      </div>
    </Center>
  );
};

export default WelcomePage;
