import React from 'react';

import { cleanup } from '@testing-library/react';

import renderWithRedux from '../../utils/test/renderWithRedux';
import { image } from '../../utils/test/dataSets';
import { FETCH_ERROR } from '../../dux/constants';
import { AppState } from '../../dux/types';

import Details from './Details';

afterEach(cleanup);

const render = (passInitialState?: Partial<AppState>) =>
  renderWithRedux(<Details />, {
    initialState: {
      loading: true,
      error: true,
      image: undefined,
      ...passInitialState
    }
  });

describe('<Details />', () => {
  it('should show spinner while loading', () => {
    const { queryByTestId } = render();
    expect(queryByTestId('spinner')).toBeTruthy();
  });

  it('should redirect to 404 if car is not found', async () => {
    const { queryByTestId, store } = render({});
    store.dispatch({ type: FETCH_ERROR });

    expect(queryByTestId('notFound')).toBeTruthy();
  });

  it('should render an image', () => {
    const { getByText, getByAltText } = render({
      loading: false,
      image
    });

    expect(
      getByText(
        'How I feel when I go to the gym with full motivation'
      )
    ).toBeTruthy();
    expect(
      getByAltText(
        'How I feel when I go to the gym with full motivation'
      )
    ).toBeTruthy();
  });
});
