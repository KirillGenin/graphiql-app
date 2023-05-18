import React, { FC, useState } from 'react';
import { Input, Button } from '@mantine/core';
import { IconLogin } from '@tabler/icons-react';
import styles from './AuthForm.module.css';

interface IFormProps {
  title: string;
  handleClick: (e: React.FormEvent, email: string, password: string) => void;
}

const AuthForm: FC<IFormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className={styles.form} onSubmit={(e) => handleClick(e, email, password)}>
      <Input
        type="email"
        value={password}
        placeholder="Enter your email adress"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <Button
        rightIcon={<IconLogin size={'1.2rem'} />}
        variant="light"
        color="dark"
        bg="#ffffff"
        radius="md"
        styles={{
          root: {
            ':hover': { backgroundColor: '#f3f0f0' },
          },
        }}
      >
        {title}
      </Button>
    </form>
  );
};

export default AuthForm;
