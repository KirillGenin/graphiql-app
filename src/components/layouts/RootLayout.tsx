import React from 'react';
import Header from '../semantic/Header';
import Main from '../semantic/Main';
import { Outlet } from 'react-router-dom';
import Footer from '../semantic/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

/* const RootLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}; */

export default RootLayout;
