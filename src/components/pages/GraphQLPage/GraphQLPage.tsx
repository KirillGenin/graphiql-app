import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import styles from './GraphQLPage.module.scss';
import Documentation from './UI/Documentation';
import Browser from './UI/Browser';

const GraphQLPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <div className={styles.wrapper}>
      <Documentation />
      <Browser />
    </div>
  ) : (
    <Navigate to={MainRoutes.AuthPage} />
  );
};

export default GraphQLPage;
