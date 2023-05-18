import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './components/layouts/router.tsx';

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
