import React from 'react';
import { createBem } from './utils/createBem';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import lazyImport from './lazyImport';

import Spinner from './components/Spinner';
import Header from './views/layout/Header';
import ScrollToTop from './components/ScrollTop';

import './App.scss';

const Home = lazyImport('./views/Home');
const Details = lazyImport('./views/Details');
const NotFound = lazyImport('./views/NotFound');

const bem = createBem('imgur-App');
const App = () => {
  return (
    <div className={bem()}>
      <Router>
        <ScrollToTop />
        <Header />
        <React.Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              path="/details/:imageId"
              exact
              render={({ match: { params } }) => (
                <Details imageId={params.imageId} />
              )}
            />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
    </div>
  );
};

export default App;
