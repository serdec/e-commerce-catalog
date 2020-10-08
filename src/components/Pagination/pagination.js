import React from 'react';
import { any } from 'prop-types';

const Pagination = ({ children } = {}) => (
  <nav className="pagination">{children}</nav>
);

Pagination.propTypes = {
  children: any,
};
export default Pagination;
