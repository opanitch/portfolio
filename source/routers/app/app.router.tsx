import React, {
  FunctionComponent,
  lazy,
  Suspense,
} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../utils/routers/router.utils';

// lazy loading pages
const ContactPage = lazy(() =>
  import(
    /* webpackChunkName: "contact-page" */ '../../pages/Contact'
  ).then((module) => ({ default: module.default }))
);
const HomePage = lazy(() =>
  import(
    /* webpackChunkName: "home-page" */ '../../pages/Home'
  ).then((module) => ({ default: module.default }))
);
const ResumePage = lazy(() =>
  import(
    /* webpackChunkName: "resume-page" */ '../../pages/Resume'
  ).then((module) => ({ default: module.default }))
);

export const AppRouter: FunctionComponent = () => {
  // render
  return (
    <Suspense fallback={<>LOADING...</>}>
      <Switch>
        {/* Contact page */}
        <Route exact component={ContactPage} path={AppRoute.CONTACT} />

        {/* Home page */}
        <Route exact component={HomePage} path={AppRoute.HOME} />

        {/* Resume page */}
        <Route exact component={ResumePage} path={AppRoute.RESUME} />
        
        {/* redirect Base path to Home */}
        <Redirect exact path={AppRoute.BASE} to={AppRoute.HOME} />

        {/* no match found, redirect to Not Found page */}
        <Redirect to={AppRoute.NOT_FOUND} />
      </Switch>
    </Suspense>
  );
};
