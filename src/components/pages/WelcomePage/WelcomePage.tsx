import React from 'react';
import { MainRoutes } from '../../../types/enums';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../utils/hooks/useAuth';
import styles from './WelcomePage.module.css';
import { useAppSelector } from '../../../store/hooks';

const WelcomePage = () => {
  const { isAuth } = useAuth();
  const email = useAppSelector((state) => state.user.email);

  return isAuth ? (
    <h3>
      {`Hi! Welcome back ${email}`}
      <NavLink to={MainRoutes.GraphPage}></NavLink>
    </h3>
  ) : (
    <h3>
      Hi! Welcome, my dear newcomer!&nbsp;
      <NavLink to={MainRoutes.AuthPage}>Please sing up of log in.</NavLink>
    </h3>
  );
};

export default WelcomePage;
