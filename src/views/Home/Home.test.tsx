import React from 'react';

import {
  cleanup,
  waitForElement
} from '@testing-library/react';

import renderWithRedux from '../../utils/test/renderWithRedux';
import { image } from '../../utils/test/dataSets';
import { AppState } from '../../dux/types';

import Home from './Home';

afterEach(cleanup);

const initialState = {
  images: [],
  image,
  loading: false,
  error: false
};

const render = (overrideInitialState?: Partial<AppState>) =>
  renderWithRedux(<Home />, {
    initialState: {
      ...initialState,
      ...overrideInitialState
    }
  });

describe('<Home />', () => {
  it('should render <NavFilter />', async () => {
    const { getByTestId } = render();
    const navFilter = await waitForElement(() =>
      getByTestId('navFilter')
    );
    expect(navFilter).toBeDefined();
  });

  it('should render <Placholder />', async () => {
    const { getByTestId } = render();
    const list = await waitForElement(() =>
      getByTestId('placeholder')
    );

    expect(list).toBeDefined();
  });
});
