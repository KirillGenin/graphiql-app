import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import GraphiQL from '../../GraphiQL';
import styles from './GraphQLPage.module.scss';

const GraphQLPage = () => {
  const { isAuth } = useAuth();

  if (!isAuth) return <Navigate to={MainRoutes.AuthPage} />;

  return (
    <div className={styles.wrapper}>
      <GraphiQL />
    </div>
  );
};

export default GraphQLPage;
