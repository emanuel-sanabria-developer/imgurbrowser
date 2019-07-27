import React from 'react';
import { cleanup } from '@testing-library/react';

import renderWithRouter from '../../../utils/test/renderWithRouter';

import Header from './Header';

beforeEach(cleanup);

describe('<Header />', () => {
  it('should render <Logo />', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText('Imgur Browser')).toBeTruthy();
  });
});
