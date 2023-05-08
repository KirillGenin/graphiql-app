import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/layouts/router.tsx';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
