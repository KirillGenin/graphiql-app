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

  const [isEmailErr, setIsEmailErr] = useState(false);
  const [isPasswordErr, setIsPasswordErr] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const inputStyles = {
    input: {
      ':focus': {
        borderColor: 'gray',
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsEmailErr(!emailRegex.test(email));
    setIsPasswordErr(!passwordRegex.test(password));

    if (!isEmailErr && !isPasswordErr) handleClick(e, email, password);
  };

  return (
    <form className={styles.form}>
      <Input.Wrapper id="input-demo" label={t('emailLabel')} w={'100%'} required>
        <Input
          id="input-demo"
          type="email"
          value={email}
          placeholder={t('email')}
          onChange={(e) => setEmail(e.target.value)}
          styles={inputStyles}
        />
        {isEmailErr && <p className={styles.error}>{t('emailError')}</p>}
      </Input.Wrapper>

      <Input.Wrapper id="input-demo" label={t('passwordLabel')} w={'100%'} required>
        <Input
          type="password"
          w={'100%'}
          value={password}
          placeholder={t('password')}
          onChange={(e) => setPassword(e.target.value)}
          styles={inputStyles}
        />
        {isPasswordErr && <p className={styles.error}>{t('passwordError')}</p>}
      </Input.Wrapper>

      <MainButton
        onClick={(e) => handleSubmit(e)}
        title={title}
        type="submit"
        width="9.5rem"
        rightIcon={<IconLogin size={'1.2rem'} />}
      />
    </form>
  );
};

export default AuthForm;
