import React from 'react';
import { Link } from 'react-router-dom';

import { createBem } from '../../../utils/createBem';

import Logo from '../../../components/Logo';

import './Header.scss';

const bem = createBem('auto-Header');
const Header = () => {
  return (
    <div className={bem()} data-testid="header">
      <div className={bem('inner')}>
        <Link to="/">
          <Logo className={bem('logo')} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
