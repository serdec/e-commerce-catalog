import React from 'react';
import { any } from 'prop-types';

const Header = ({ children } = {}) => (
  <header className="header container">{children}</header>
);

Header.propTypes = {
  children: any,
};
export default Header;
