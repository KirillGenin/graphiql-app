import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../../utils/hooks/useAuth';
import cookie from 'cookie';
import styles from './WelcomePage.module.scss';
import { Trans, useTranslation } from 'react-i18next';
import { Center, List } from '@mantine/core';
import { IconBrandGithub, IconClipboardList, IconError404, IconSchool } from '@tabler/icons-react';

const WelcomePage = () => {
  const { isAuth } = useAuth();
  const { t } = useTranslation();

  const { email } = cookie.parse(document.cookie);

  return isAuth ? (
    <div className={styles.about}>
      <h2 className={styles.title}>
        <Trans i18nKey="welcomeUser">Hi! Welcome back </Trans>
        {`${email}`}
      </h2>

      <h4 className={styles.title}>{t('aboutTeamTitle')}</h4>
      <List size="xl">
        <List.Item mb={'0.5rem'} icon={<IconBrandGithub size={'1.7rem'} />}>
          <Link className={styles.link} to={'https://github.com/KirillGenin'}>
            {t('kirill')}
          </Link>
        </List.Item>

        <List.Item mb={'0.5rem'} icon={<IconBrandGithub size={'1.7rem'} />}>
          <Link className={styles.link} to={'https://github.com/Disembow'}>
            {t('yauhen')}
          </Link>
        </List.Item>

        <List.Item mb={'0.5rem'} icon={<IconError404 size={'1.7rem'} />}>
          {t('dinara')}
        </List.Item>

        <List.Item mb={'0.5rem'} icon={<IconClipboardList size={'1.7rem'} />}>
          <Link
            className={styles.link}
            to={
              'https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md'
            }
          >
            {t('task')}
          </Link>
        </List.Item>

        <List.Item mb={'0.5rem'} icon={<IconSchool size={'1.7rem'} />}>
          <Link className={styles.link} to={'https://rs.school/react/'}>
            {t('rss')}
          </Link>
        </List.Item>
      </List>
    </div>
  ) : (
    <Center>
      <div style={{ textAlign: 'center' }}>
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
