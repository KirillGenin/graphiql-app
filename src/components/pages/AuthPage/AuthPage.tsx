import React from 'react';
import AuthForm from '../../auth/AuthForm';
import { Navigate, useNavigate } from 'react-router';
import { MainRoutes, Registration } from '../../../types/enums';
import { useAuth } from '../../../utils/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { setUser } from '../../../store/slices/authSlice';
import AuthType from './UI/AuthType';
import { auth } from '../../../utils/auth/firebase';

export interface NewUser extends User {
  accessToken: string;
}

const AuthPage = () => {
  const { isAuth } = useAuth();

  const dispatch = useAppDispatch();
  const regType = useAppSelector((state) => state.user.regType);
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();

    if (regType === Registration.SignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const user = data.user as NewUser;
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
    } else if (regType === Registration.LogIn) {
      signInWithEmailAndPassword(auth, email, password).then((data) => {
        const user = data.user as NewUser;
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      });
    }
  };

  return isAuth ? (
    <Navigate to={MainRoutes.WelcomePage} />
  ) : (
    <>
      <AuthForm title="Registration" handleClick={handleAuth} />
      <AuthType />
    </>
  );
};

export default AuthPage;
