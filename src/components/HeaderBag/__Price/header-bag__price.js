import React from 'react';
import { number } from 'prop-types';

const HeaderBag__Price = ({ value = 0 } = {}) => (
  <>{value > 0 && <div className="header-bag__price">£{value}</div>}</>
);

HeaderBag__Price.propTypes = {
  value: number,
};
export default HeaderBag__Price;
