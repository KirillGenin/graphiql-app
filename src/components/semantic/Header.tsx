import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MainRoutes } from '../../types/enums';
import cookie from 'cookie';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { email, token, id } = cookie.parse(document.cookie);
    document.cookie = `email=${email}; max-age=-1;`;
    document.cookie = `id=${id}; max-age=-1;`;
    document.cookie = `token=${token}; max-age=-1;`;
    navigate(MainRoutes.WelcomePage);
  };

  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to={MainRoutes.WelcomePage} className="navigation__item">
          Home
        </NavLink>
        <NavLink to={MainRoutes.AuthPage} className="navigation__item">
          Registration
        </NavLink>
        <NavLink to={MainRoutes.GraphPage} className="navigation__item">
          GraphiQl
        </NavLink>
      </nav>
      <button onClick={handleLogout}>Log out</button>
    </header>
  );
};

export default Header;
