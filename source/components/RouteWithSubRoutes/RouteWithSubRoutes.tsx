import React from 'react';
import { Route } from 'react-router-dom';

import { RouteConfigType } from '../../route-config';

const RouteWithSubRoutes = (route: RouteConfigType) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

export default RouteWithSubRoutes;
