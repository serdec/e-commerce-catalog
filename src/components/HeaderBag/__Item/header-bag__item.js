import React from 'react';
import { any } from 'prop-types';

const HeaderBag__Item = ({ children }) => (
  <div className="header-bag__item">{children}</div>
);

HeaderBag__Item.propTypes = {
  children: any,
};
export default HeaderBag__Item;
