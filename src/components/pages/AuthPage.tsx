import React from 'react';
import AuthForm from '../auth/AuthForm';
import { Navigate, useNavigate } from 'react-router';
import { MainRoutes } from '../../types/enums';
import { useAuth } from '../../utils/hooks/useAuth';
import { useAppDispatch } from '../../store/hooks';
import { getAuth, createUserWithEmailAndPassword, User } from 'firebase/auth';
import { setUser } from '../../store/slices/authSlice';

export interface NewUser extends User {
  accessToken: string;
}

const AuthPage = () => {
  const { isAuth } = useAuth();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((e) => {
        const user = e.user as NewUser;
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate(MainRoutes.WelcomePage);
      })
      .catch((error) => console.error(error.message));
    console.log('Submit', email, password);
  };

  return isAuth ? (
    <Navigate to={MainRoutes.WelcomePage} />
  ) : (
    <AuthForm title="Registration" handleClick={handleAuth} />
  );
};

export default AuthPage;
