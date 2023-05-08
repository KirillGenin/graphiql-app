import React, { FC, useState } from 'react';

interface IFormProps {
  title: string;
  handleClick: (e: React.FormEvent, email: string, password: string) => void;
}

const AuthForm: FC<IFormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => handleClick(e, email, password)}>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>{title}</button>
    </form>
  );
};

export default AuthForm;
