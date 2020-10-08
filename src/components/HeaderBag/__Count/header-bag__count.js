import React from 'react';
import { any } from 'prop-types';

const HeaderBag__Count = ({ children } = {}) => (
  <div className="header-bag__count">{children}</div>
);

HeaderBag__Count.propTypes = {
  children: any,
};
export default HeaderBag__Count;
