import React from 'react';
import { MainRoutes } from '../../types/enums';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';

const WelcomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <h3>
      Hi! Welcome back&nbsp; {/* add users name here! */}
      <NavLink to={MainRoutes.GraphPage}>home</NavLink>
    </h3>
  ) : (
    <h3>
      Hi! Welcome, my dear newcomer!&nbsp;
      <NavLink to={MainRoutes.AuthPage}>Please sing up of log in.</NavLink>
    </h3>
  );
};

export default WelcomePage;
