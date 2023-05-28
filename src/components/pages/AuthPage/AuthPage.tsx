import React from 'react';
import AuthForm from '../../auth/AuthForm';
import { Navigate, useNavigate } from 'react-router';
import { MainRoutes, Registration } from '../../../types/enums';
import { useAuth } from '../../../utils/hooks/useAuth';
import { useAppSelector } from '../../../app/hooks';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../../../utils/auth/firebase';
import AuthType from './UI/AuthType';
import styles from './AuthPage.module.css';

export interface NewUser extends User {
  accessToken: string;
}

const AuthPage = () => {
  const { isAuth } = useAuth();

  const regType = useAppSelector((state) => state.user.regType);
  const navigate = useNavigate();

  const expireDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);

  const handleAuth = (e: React.FormEvent, email: string, password: string) => {
    e.preventDefault();
    console.log('click');

    if (regType === Registration.SignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          const user = data.user as NewUser;
          document.cookie = `email=${user.email}; expires=${expireDate}`;
          document.cookie = `id=${user.uid}; expires=${expireDate}`;
          document.cookie = `token=${user.accessToken}; expires=${expireDate}`;
          navigate(MainRoutes.WelcomePage);
        })
        .catch((error) => console.error(error.message));
    } else if (regType === Registration.LogIn) {
      signInWithEmailAndPassword(auth, email, password).then((data) => {
        const user = data.user as NewUser;
        document.cookie = `email=${user.email}; expires=${expireDate}`;
        document.cookie = `id=${user.uid}; expires=${expireDate}`;
        document.cookie = `token=${user.accessToken}; expires=${expireDate}`;
        navigate('/');
      });
    }
  };

  return isAuth ? (
    <Navigate to={MainRoutes.WelcomePage} />
  ) : (
    <div className={styles.wrapper}>
      <AuthForm
        title={regType === Registration.LogIn ? 'Log In' : 'Sign Up'}
        handleClick={handleAuth}
      />
      <AuthType />
    </div>
  );
};

export default AuthPage;
