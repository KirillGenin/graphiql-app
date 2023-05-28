import React, { useEffect } from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import GraphiQL from '../../GraphiQL';
import styles from './GraphQLPage.module.scss';
import Documentation from './UI/Documentation';
import { URL, fetchSchema } from '../../../app/slices/docsSlise';
import { useAppDispatch } from '../../../app/hooks';

const GraphQLPage = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSchema(URL));
  }, [dispatch]);

  return isAuth ? (
    <div className={styles.wrapper}>
      <Documentation />
      <GraphiQL />
    </div>
  ) : (
    <Navigate to={MainRoutes.AuthPage} />
  );
};

export default GraphQLPage;
