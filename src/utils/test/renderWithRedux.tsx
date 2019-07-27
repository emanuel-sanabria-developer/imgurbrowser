import React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import { render } from '@testing-library/react';
import { AppState } from '../../dux/types';
import rootReducer from '../../dux/reducers';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';

const renderWithRedux = (
  ui: JSX.Element,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    route = '/',
    history = createMemoryHistory({
      initialEntries: [route]
    })
  }: {
    initialState?: Partial<AppState>;
    store?: Store;
    route?: string;
    history?: History;
  } = {}
) => ({
  ...render(
    <Router history={history}>
      <Provider store={store}>{ui}</Provider>
    </Router>
  ),
  store,
  history
});

export default renderWithRedux;
