import React from 'react';
import {
  cleanup,
  render,
  fireEvent
} from '@testing-library/react';
import { Switch, Route, MemoryRouter } from 'react-router';

import { getAll } from '../../../utils/test/query';

import renderWithRouter from '../../../utils/test/renderWithRouter';
import { images } from '../../../utils/test/dataSets';

import List, { bem } from './List';

afterEach(cleanup);

const el = {
  specs: `.${bem('specs')}`,
  item: `.${bem('item')}`
};

describe('<List />', () => {
  it('should render images ', () => {
    const { getByText, getByAltText } = renderWithRouter(
      <List images={images} />
    );
    const carEls = getAll(el.item);

    expect(carEls.length).toBe(3);
    expect(
      getByText(
        'How I feel when I go to the gym with full motivation'
      )
    ).toBeDefined();
    expect(
      getByAltText(
        'How I feel when I go to the gym with full motivation'
      )
    ).toBeDefined();
  });

  it('when click on "View details" should navigate to show image details', () => {
    const MockComp = () => (
      <div data-testid="showImageDetails" />
    );
    const { queryByTestId } = render(
      <MemoryRouter>
        <div>
          <List images={images} />
          <Switch>
            <Route
              path="/details/:imageId"
              component={MockComp}
            />
          </Switch>
        </div>
      </MemoryRouter>
    );

    const link = getAll(el.item)[0];

    fireEvent.click(link);

    expect(queryByTestId('showImageDetails')).toBeTruthy();
  });
});
