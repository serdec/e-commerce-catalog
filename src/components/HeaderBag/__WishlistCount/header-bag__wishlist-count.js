import React from 'react';
import { any } from 'prop-types';

const HeaderBag__WishlistCount = ({ children } = {}) => (
  <div className="header-bag__wishlist-count">{children}</div>
);

HeaderBag__WishlistCount.propTypes = {
  children: any,
};
export default HeaderBag__WishlistCount;
