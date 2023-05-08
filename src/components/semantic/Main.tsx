import React, { FC } from 'react';

interface IMain {
  children: JSX.Element;
}

const Main: FC<IMain> = ({ children }) => {
  return <h1 className="main">{children}</h1>;
};

export default Main;
