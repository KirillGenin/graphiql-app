import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import styles from './GraphQLPage.module.css';

const GraphQLPage = () => {
  const { isAuth } = useAuth();

  return isAuth ? <div>GraphQLPage</div> : <Navigate to={MainRoutes.AuthPage} />;
};

export default GraphQLPage;
