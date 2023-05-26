import React, { FC, useState } from 'react';
import { Input } from '@mantine/core';
import { IconLogin } from '@tabler/icons-react';
import styles from './AuthForm.module.scss';
import MainButton from '../common/MainButton';
import { useTranslation } from 'react-i18next';

interface IFormProps {
  title: string;
  handleClick: (e: React.FormEvent, email: string, password: string) => void;
}

const AuthForm: FC<IFormProps> = ({ title, handleClick }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyles = {
    input: {
      ':focus': {
        borderColor: 'gray',
      },
    },
  };

  return (
    <form className={styles.form}>
      <Input
        type="email"
        value={email}
        placeholder={t('email')}
        onChange={(e) => setEmail(e.target.value)}
        styles={inputStyles}
      />
      <Input
        type="password"
        value={password}
        placeholder={t('password')}
        onChange={(e) => setPassword(e.target.value)}
        styles={inputStyles}
      />
      <MainButton
        onClick={(e) => handleClick(e, email, password)}
        title={title}
        type="submit"
        width="9.5rem"
        rightIcon={<IconLogin size={'1.2rem'} />}
      />
    </form>
  );
};

export default AuthForm;
