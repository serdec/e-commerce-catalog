import React from 'react';
import { any } from 'prop-types';

const HeaderBag = ({ children } = {}) => (
  <aside className="header-bag">{children}</aside>
);

HeaderBag.propTypes = {
  children: any,
};
export default HeaderBag;
