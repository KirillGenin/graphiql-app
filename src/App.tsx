import React from 'react';
import './App.scss';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './components/layouts/router.tsx';

function App() {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
