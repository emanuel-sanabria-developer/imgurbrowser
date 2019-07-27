import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRedux from '../../../utils/test/renderWithRedux';

import NavFilter from './NavFilter';

afterEach(cleanup);

describe('<NavFilter />', () => {
  it('should render sort <Select />', () => {
    const { getAllByTestId } = renderWithRedux(
      <NavFilter />
    );
    const select = getAllByTestId('sort');
    expect(select[0].childNodes.length).toBe(3);
  });
  it('should render time <Select />', () => {
    const { getAllByTestId } = renderWithRedux(
      <NavFilter />
    );
    const select = getAllByTestId('window');
    expect(select[0].childNodes.length).toBe(5);
  });
  it('should render section <Select />', () => {
    const { getAllByTestId } = renderWithRedux(
      <NavFilter />
    );
    const select = getAllByTestId('section');
    expect(select[0].childNodes.length).toBe(3);
  });
});
