import React, { FC, useState } from 'react';
import { Input } from '@mantine/core';
import { IconLogin } from '@tabler/icons-react';
import styles from './AuthForm.module.css';
import MainButton from '../common/Button';

interface IFormProps {
  title: string;
  handleClick: (e: React.FormEvent, email: string, password: string) => void;
}

const AuthForm: FC<IFormProps> = ({ title, handleClick }) => {
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
        placeholder="Enter your email adress"
        onChange={(e) => setEmail(e.target.value)}
        styles={inputStyles}
      />
      <Input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        styles={inputStyles}
      />
      <MainButton
        onClick={(e) => handleClick(e, email, password)}
        title={title}
        type="submit"
        rightIcon={<IconLogin size={'1.2rem'} />}
      />
    </form>
  );
};

export default AuthForm;
