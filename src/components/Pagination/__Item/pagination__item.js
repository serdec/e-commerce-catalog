import React from 'react';
import { any } from 'prop-types';

const Pagination__Item = ({ children } = {}) => (
  <li className="pagination__item">{children}</li>
);

Pagination__Item.propTypes = {
  children: any,
};
export default Pagination__Item;
