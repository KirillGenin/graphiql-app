import React, { useState } from 'react';
import { Registration } from '../../../../types/enums';
import styles from '../AuthPage.module.css';
import { toggleRegType } from '../../../../store/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';

const HandleAuthType = () => {
  const dispatch = useAppDispatch();
  const registration = useAppSelector((state) => state.user.regType);

  if (registration === Registration.SignUp) {
    return (
      <div>
        Already have an account?{' '}
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
      <div>
        Don`t have an account?{' '}
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

export default HandleAuthType;
