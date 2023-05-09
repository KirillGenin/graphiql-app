import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MainRoutes } from '../../types/enums';
import { useAppDispatch } from '../../store/hooks';
import { removeUser } from '../../store/slices/authSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(removeUser());
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
