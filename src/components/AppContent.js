import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';

const AppContent = () => (
  <div>
    <Suspense fallback={'loading'}>
      <Switch>
        {routes.map(
          route =>
            route.component && (
              <Route
                key={route.name}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ),
        )}
        <Redirect from="/" to="/movies" />
      </Switch>
    </Suspense>
  </div>
);

export default React.memo(AppContent);
