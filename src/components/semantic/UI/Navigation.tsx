import React from 'react';
import { NavLink as NavLinkUi } from '@mantine/core';
import { useNavigate } from 'react-router';
import { MainRoutes } from '../../../types/enums';
import { IconDatabaseSearch, IconHome2, IconLogin } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        label={t('navReg')}
        onClick={() => navigate(MainRoutes.AuthPage)}
        icon={<IconLogin size={'1.2rem'} />}
      />
      <NavLinkUi
        w={'8.5rem'}
        styles={styles}
        label="GraphiQL"
        onClick={() => navigate(MainRoutes.GraphPage)}
        icon={<IconDatabaseSearch size={'1.1rem'} />}
      />
    </>
  );
};

export default Navigation;
