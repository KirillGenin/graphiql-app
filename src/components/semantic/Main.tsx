import React, { FC } from 'react';

interface IMain {
  children: JSX.Element;
}

const Main: FC<IMain> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
