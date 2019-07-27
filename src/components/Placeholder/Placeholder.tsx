import React from 'react';
import range from 'lodash-es/range';
import { createBem } from '../../utils/createBem';

import './Placeholder.scss';

const bem = createBem('imgur-Placeholder');
const Placeholder = () => (
  <div className={bem()} data-testid="placeholder">
    {range(16).map(i => (
      <div key={i} className={bem('item')} />
    ))}
  </div>
);

export default Placeholder;
