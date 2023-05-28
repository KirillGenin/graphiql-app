import React from 'react';
import { Registration } from '../../../../types/enums';
import { toggleRegType } from '../../../../app/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import styles from '../AuthPage.module.css';

const AuthType = () => {
  const dispatch = useAppDispatch();
  const registration = useAppSelector((state) => state.user.regType);

  if (registration === Registration.SignUp) {
    return (
      <div className={styles.auth_type}>
        <span className={styles.auth_message}>Already have an account?</span>
        <span>&nbsp;</span>
        <span
          className={styles.toggler}
          onClick={() => dispatch(toggleRegType(Registration.LogIn))}
        >
          Log In.
        </span>
      </div>
    );
  } else {
    return (
      <div className={styles.auth_type}>
        <span className={styles.auth_message}>Don`t have an account?</span>
        <span>&nbsp;</span>
        <span
          className={styles.toggler}
          onClick={() => dispatch(toggleRegType(Registration.SignUp))}
        >
          Sign Up.
        </span>
      </div>
    );
  }
};

export default AuthType;
