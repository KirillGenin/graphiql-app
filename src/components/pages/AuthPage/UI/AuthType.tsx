import React from 'react';
import { Registration } from '../../../../types/enums';
import { toggleRegType } from '../../../../app/slices/authSlice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import styles from '../AuthPage.module.scss';
import { useTranslation } from 'react-i18next';

const AuthType = () => {
  const dispatch = useAppDispatch();
  const registration = useAppSelector((state) => state.user.regType);
  const { t } = useTranslation();

  if (registration === Registration.SignUp) {
    return (
      <div className={styles.auth_type}>
        <span className={styles.auth_message}>{t('loginMessage')}</span>
        <span>&nbsp;</span>
        <span
          className={styles.toggler}
          onClick={() => dispatch(toggleRegType(Registration.LogIn))}
        >
          {t('login')}
        </span>
      </div>
    );
  } else {
    return (
      <div className={styles.auth_type}>
        <span className={styles.auth_message}>{t('signupMessage')}</span>
        <span>&nbsp;</span>
        <span
          className={styles.toggler}
          onClick={() => dispatch(toggleRegType(Registration.SignUp))}
        >
          {t('signup')}
        </span>
      </div>
    );
  }
};

export default AuthType;
