import React from 'react';
import { any } from 'prop-types';

const ProductPage = ({ children } = {}) => (
  <main className="product-page">{children}</main>
);

ProductPage.propTypes = {
  children: any,
};
export default ProductPage;
