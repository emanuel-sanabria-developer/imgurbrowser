import React from 'react';
import { createBem } from '../../utils/createBem';

import './Logo.scss';

interface LogoProps {
  className?: string;
}

const bem = createBem('imgur-Logo');
const Logo = ({ className }: LogoProps) => (
  <h1 className={bem()}>
    Imgur Browser{' '}
    <span aria-label="camera" role="img">
      📷
    </span>
  </h1>
);

export default Logo;
