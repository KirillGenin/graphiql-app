import React from 'react';
import { NavLink } from 'react-router-dom';
import { MainRoutes } from '../../types/enums';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to={MainRoutes.WelcomePage} className="navigation__item">
          Home
        </NavLink>
        <NavLink to={MainRoutes.AuthPage} className="navigation__item">
          Forms
        </NavLink>
        <NavLink to={MainRoutes.GraphPage} className="navigation__item">
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
