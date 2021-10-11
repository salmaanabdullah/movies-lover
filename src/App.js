import React, { Suspense, lazy } from 'react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import ErrorBoundary from 'src/components/ErrorBoundary';
import { Route, Switch } from 'react-router-dom';
import { history } from 'src/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

const DefaultLayout = lazy(() => import('./layout'));

const App = () => (
  <ErrorBoundary>
    <ConnectedRouter history={history}>
      <Suspense fallback={'loading'}>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </ErrorBoundary>
);

export default App;
