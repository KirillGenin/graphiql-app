import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './RootLayout';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import GraphQLPage from '../pages/GraphQLPage/GraphQLPage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import { MainRoutes } from '../../types/enums';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={MainRoutes.WelcomePage} element={<RootLayout />}>
      <Route index element={<WelcomePage />} />
      <Route path={MainRoutes.AuthPage} element={<AuthPage />} />
      <Route path={MainRoutes.GraphPage} element={<GraphQLPage />} />
      <Route path={MainRoutes.NotFoundPage} element={<PageNotFound />} />
    </Route>
  )
);

export default router;
