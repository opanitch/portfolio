import React, { FunctionComponent, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../utils/routers/router.utils';

// lazy loading pages
const ContactPage = lazy(() =>
  import(
    /* webpackChunkName: "contact-page" */ '../../pages/contact-page/contact.page'
  ).then((module) => ({ default: module.default }))
);
const HomePage = lazy(() =>
  import(
    /* webpackChunkName: "home-page" */ '../../pages/home-page/home.page'
  ).then((module) => ({ default: module.default }))
);
const NotFoundPage = lazy(() =>
  import(
    /* webpackChunkName: "not-found-page" */ '../../pages/not-found-page/not-found.page'
  ).then((module) => ({ default: module.default }))
);
const ResumePage = lazy(() =>
  import(
    /* webpackChunkName: "resume-page" */ '../../pages/resume-page/resume.page'
  ).then((module) => ({ default: module.default }))
);

export const AppRouter: FunctionComponent = () => {
  // render
  return (
    <Suspense fallback={<>LOADING...</>}>
      <Switch>
        {/* page routes */}
        {/* Contact page */}
        <Route exact component={ContactPage} path={AppRoute.CONTACT} />

        {/* Home page */}
        <Route exact component={HomePage} path={AppRoute.HOME} />

        {/* Not Found page */}
        <Route exact component={NotFoundPage} path={AppRoute.NOT_FOUND} />

        {/* Resume page */}
        <Route exact component={ResumePage} path={AppRoute.RESUME} />

        {/* redirects */}
        {/* redirect Base path to Home */}
        <Redirect exact path={AppRoute.BASE} to={AppRoute.HOME} />

        {/* no match found, redirect to Not Found page */}
        <Redirect to={AppRoute.NOT_FOUND} />
      </Switch>
    </Suspense>
  );
};
