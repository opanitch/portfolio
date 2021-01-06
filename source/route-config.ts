// import { FunctionComponent, ReactNode } from 'react';

import * as ROUTES from '../api/constants/routes';

import * as PAGES from './pages';

type RouteType = {
  component: () => JSX.Element;
  path: string;
};

export interface RouteConfigType extends RouteType {
  routes?: RouteType[];
}

const routeConfig: RouteConfigType[] = [
  {
    component: PAGES.CONTACT,
    path: ROUTES.CONTACT,
  },
  {
    component: PAGES.HOMEPAGE,
    path: ROUTES.HOME,
  },
  {
    component: PAGES.NOT_FOUND,
    path: ROUTES.NOT_FOUND,
  },
  {
    component: PAGES.RESUME,
    path: ROUTES.RESUME,
  },
];

export default routeConfig;
